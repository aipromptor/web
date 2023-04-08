import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import produce from 'immer';
import { gqlClient, host } from "../../../app/api";
import { RootState } from "../../../app/store";
import { PaginationArg, TextToImageHistoryEntity } from "../../../graphql/types";
import { generateTextToImage, saveHistory } from "../selected-panel/slice";

export interface ImageCardState {
    base64RawData: string | null;
    url: string | null;
}

export interface HistoryState {
    prompt: string;
    negativePrompt: string;
    //model: string;
    // sampler: string;
    // steps: number;
    // cfgScale: number;
    // width: number;
    // height: number;
    base64RawData: string | null;
    url: string | null;
    width?: number;
    height?: number;
    historyId?: string | null;
}

export interface ImageScrollPanelState {
    histories: HistoryState[];
    pagination: PaginationArg;
}

const loadingPlaceholdHost = `https://placehold.co`;

const getloadingPlacehold = (width: number, height: number) => {
    return `${loadingPlaceholdHost}/${width}x${height}`;
}

const initialState: ImageScrollPanelState = {
    histories: [],
    pagination: { page: 0, pageSize: 10 }
}

const base64RawDataToUrl = (base64RawData: string) => {
    return `data:image/png;base64,${base64RawData}`;
}

const loadImage = async (imageUrl: string, imageName: string) => {
    const response = await axios.get(imageUrl, { responseType: 'blob' });
    const mimeType = response.headers['content-type'];
    const imageFile = new File([response.data], imageName, { type: mimeType });
    return imageFile;
}

export const uploadTextToImage = createAsyncThunk<boolean, string>(
    "graphql/uploadTextToImage",
    async (args, thunkAPI) => {
        if (!args) return false;
        const rootState = thunkAPI.getState() as RootState;
        const found = rootState.imageTimeline.histories.findIndex(i => i.historyId === args);
        if (found > -1 && rootState.imageTimeline.histories && rootState.imageTimeline.histories.length) {
            const history = rootState.imageTimeline.histories[found];

            if (history.base64RawData) {
                const url = base64RawDataToUrl(history.base64RawData);
                const file = await loadImage(url, `history-${history.historyId}.png`);
                const formData = new FormData();
                formData.append("files", file);

                const fileResponse = await axios.post<{ id: string }[]>(`${host}/api/upload`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                console.log('fileResponse.data', fileResponse.data);
                const generated_images_ids = fileResponse.data.map(i => i.id);
                const mutation = gql`

                mutation relateImageToHistory($id: ID!, $data: TextToImageHistoryInput!) {
                    updateTextToImageHistory(id: $id, data: $data) {
                      data {
                        id
                      }
                    }
                  }
                `;

                const relatedResponse = await gqlClient.mutate({
                    mutation: mutation,
                    variables: {
                        id: history.historyId,
                        data: {
                            generated_images: generated_images_ids
                        },
                    },
                });
                
                return !relatedResponse.errors;
            }

        }
        return false;
    }
);


export const loadHistory = createAsyncThunk<TextToImageHistoryEntity[], void>(
    "graphql/queryTextToImageHistory",
    async (args, thunkAPI) => {
        const language = getSystemLanguage(thunkAPI.getState() as RootState);
        const pagination = getPagination(thunkAPI.getState() as RootState);;
        const query = gql`
        query queryTextToImageHistory(
            $locale: I18NLocaleCode
            $filters: TextToImageHistoryFiltersInput
            $pagination: PaginationArg
            $sort: [String]
            $picked_prompts_pagination: PaginationArg
          ) {
            textToImageHistories(
              locale: $locale
              filters: $filters
              pagination: $pagination
              sort: $sort
            ) {
              data {
                id
                attributes {
                  paramters_info
                  picked_prompts(pagination: $picked_prompts_pagination) {
                    data {
                      id
                      attributes {
                        tag
                        title
                      }
                    }
                  }
                  publishedAt
                  generated_images {
                    data {
                      attributes {
                        url
                        previewUrl
                        provider_metadata
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await gqlClient.query({
            query: query,
            variables: {
                locale: language,
                filters: {},
                pagination: pagination,
                sort: ["createdAt:desc"],
                picked_prompts_pagination: { limit: 100 }
            },
        });
        return response.data.textToImageHistories.data;
    }
);


const imageScrollPanelSlice = createSlice({
    name: "imageScroll",
    initialState,
    reducers: {
        insertImage: (state, action: PayloadAction<{ index: number, image: ImageCardState }>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            //state.images.splice(action.payload.index, 0, action.payload.image);
        },
    },
    extraReducers: (builder) => {
        builder
            // load history
            .addCase(loadHistory.pending, (state) => {
            })
            .addCase(loadHistory.fulfilled, (state, action) => {
                const historyImages = action.payload.map(h => {

                    let defaultSize = 512;
                    let url = getloadingPlacehold(
                        h.attributes?.paramters_info && h.attributes?.paramters_info["width"] ? h.attributes?.paramters_info["width"] : defaultSize,
                        h.attributes?.paramters_info && h.attributes?.paramters_info["height"] ? h.attributes?.paramters_info["height"] : defaultSize);

                    if (h.attributes?.generated_images
                        && h.attributes?.generated_images?.data.length) {
                        url = new URL(h.attributes?.generated_images?.data[0].attributes?.url || '', host).toString();
                    }

                    return {
                        historyId: h.id,
                        url: url.toString(),
                        prompt: h.attributes?.picked_prompts?.data.map(p => p.attributes?.title).join(','),
                        //negativePrompt: h.attributes?.picked_negative_prompts?.data.map(p => p.attributes?.title).join(','),
                        negativePrompt: h.attributes?.paramters_info && h.attributes?.paramters_info["negative_prompt"] ? h.attributes?.paramters_info["negative_prompt"] : "",
                    };
                }) as HistoryState[] || [];

                state.histories = produce(state.histories, (draft) => {
                    draft.unshift(...historyImages);
                });
            })
            .addCase(loadHistory.rejected, (state, action) => {
                console.error("loadHistory.rejected");
            })
            // create a new history
            .addCase(saveHistory.pending, (state) => {
            })
            .addCase(saveHistory.fulfilled, (state, action) => {
                console.log("saveHistory.fulfilled", action.payload);
                const width = action.payload.attributes?.paramters_info["width"];
                const height = action.payload.attributes?.paramters_info["height"];

                const newImage: HistoryState = {
                    base64RawData: null,
                    historyId: action.payload.id,
                    url: getloadingPlacehold(width, height),
                    prompt: action.payload.attributes?.picked_prompts?.data.map(p => p.attributes?.title).join(',') || "",
                    negativePrompt: action.payload.attributes?.paramters_info["negative_prompt"] || "",
                };

                //state.images = newImages;
                // produce(state, (draft) => {
                //     draft.images.unshift(...newImages);
                // });
                state.histories = produce(state.histories, (draft) => {
                    draft.unshift(...[newImage]);
                });
            })
            .addCase(saveHistory.rejected, (state, action) => {
                console.error("image-card.generateTextToImage.rejected");
            })
            // generate text to image
            .addCase(generateTextToImage.pending, (state) => {
            })
            .addCase(generateTextToImage.fulfilled, (state, action) => {
                const historyId = action.meta.arg.id;
                const found = state.histories.findIndex(i => i.historyId === historyId);
                if (found > -1 && action.payload.images && action.payload.images.length) {
                    state.histories[found].base64RawData = action.payload.images[0];
                }
                // const newImages = action.payload.images?.map(m => {
                //     return {
                //         base64RawData: m,
                //         prompt: action.payload.parameters.prompt,
                //         negativePrompt: action.payload.parameters.negative_prompt,
                //     };
                // }) as HistoryState[] || [];

                // //state.images = newImages;
                // // produce(state, (draft) => {
                // //     draft.images.unshift(...newImages);
                // // });

                // state.histories = produce(state.histories, (draft) => {
                //     draft.unshift(...newImages);
                // });
            })
            .addCase(generateTextToImage.rejected, (state, action) => {
            })
            // upload image
            .addCase(uploadTextToImage.pending, (state) => {
            })
            .addCase(uploadTextToImage.fulfilled, (state, action) => {
                console.error("uploadTextToImage.fulfilled");
            })
            .addCase(uploadTextToImage.rejected, (state, action) => {
                console.error("uploadTextToImage.rejected");
            });
    },
});

export const getImages = (state: RootState) => state.imageTimeline.histories;
export const getImage = (index: number) => (state: RootState) => state.imageTimeline.histories[index];
export const getSystemLanguage = (state: RootState) => state.locale.systemLanguage;
export const getPagination = (state: RootState) => state.imageTimeline.pagination;

export const { insertImage } = imageScrollPanelSlice.actions;

export default imageScrollPanelSlice.reducer;
