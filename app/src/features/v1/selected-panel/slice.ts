import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { gqlClient } from "../../../app/api";
import { RootState } from "../../../app/store";
import { TextToImageResponse } from "../../stable-diffusion/Api";

interface Tag {
    id: string;
    tag: string;
    title: string;
    selected: boolean;
}

interface Tab {
    id: string;
    name: string;
    tags: Tag[];
}

interface SDServer {
    webUrl: string;
}

interface ServerState {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    data: SDServer;
}

interface SelectedPanelState {
    tabs: Tab[];
    selectedTags: Tag[];
    loading: boolean;
    error: string | null;
    selectedTab: Tab | null;
    server: ServerState;
}

const initialState: SelectedPanelState = {
    tabs: [],
    selectedTags: [],
    loading: false,
    error: null,
    selectedTab: null,
    server: {
        status: "idle",
        data: { webUrl: "https://johns-titanium-briefing-invisible.trycloudflare.com/" },
        error: null,
    },
};

interface CategoryEntity {
    id: string;
    attributes: {
        name: string;
        title: string;
    };
}

export const fetchTabs = createAsyncThunk("tabs/fetchTabs", async (_, { getState }) => {
    // const language = store.getState().locale.language;
    //const language = useAppSelector((state: RootState) => state.language.systemLanguage);
    const language = getSystemLanguage(getState() as RootState);
    //const language ='zh-CN';
    const query = gql`
        query listCategories($locale: I18NLocaleCode, $filter: CategoryFiltersInput) {
            categories(locale: $locale, filters: $filter) {
                data {
                    id
                    attributes {
                        name
                        title
                    }
                }
            }
        }
    `;
    const response = await gqlClient.query({
        query: query,
        variables: {
            locale: language,
            filter: { label_tags: { value: { eq: "homepage" } } },
        },
    });
    // The value we return becomes the `fulfilled` action payload
    const entities = response.data.categories.data as CategoryEntity[];
    const tabs = entities.map((e) => ({
        id: e.id,
        name: e.attributes.title,
        tags: [],
    })) as Tab[];
    return tabs;
});

interface PromptEntity {
    id: string;
    attributes: {
        tag: string;
        title: string;
    };
}

interface FetchPromptsArgs {
    categoryId?: string;
}

export const fetchPromptsAsync = createAsyncThunk<PromptEntity[], FetchPromptsArgs>(
    "prompts/fetch",
    async (args, thunkAPI) => {
        const query = gql`
            query listPrompts($locale: I18NLocaleCode, $id: ID, $filters: PromptFiltersInput) {
                category(locale: $locale, id: $id) {
                    data {
                        id
                        attributes {
                            locale
                            name
                            title
                            hot_prompts(filters: $filters) {
                                data {
                                    id
                                    attributes {
                                        title
                                        tag
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;
        const language = getSystemLanguage(thunkAPI.getState() as RootState);
        const response = await gqlClient.query({
            query: query,
            variables: {
                locale: language,
                id: args.categoryId,
                filters: { label_tags: { value: { eq: "homepage" } } },
            },
        });
        // The value we return becomes the `fulfilled` action payload
        const entities = response.data.category.data.attributes.hot_prompts.data as PromptEntity[];
        return entities;
    }
);

export interface GenerateTextToImageArgs {
    prompt: string;
}

export const generateTextToImage = createAsyncThunk<TextToImageResponse, GenerateTextToImageArgs>(
    "sd/text2image",
    async (args, thunkAPI) => {
        console.log('args.prompt', args.prompt);
        const server = getServer(thunkAPI.getState() as RootState);
        const url = new URL("/sdapi/v1/txt2img", server.data.webUrl);
        const request = {
            serverUrl: server.data.webUrl,
            enable_hr: false,
            denoising_strength: 0,
            firstphase_width: 0,
            prompt: args.prompt,
            seed: -1,
            subseed: -1,
            sampler_name: "DPM++ SDE Karras",
            batch_size: 1,
            n_iter: 1,
            steps: 20,
            cfg_scale: 7,
            width: 540,
            height: 960,
            restore_faces: false,
            tiling: false,
            negative_prompt:
                "bra, covered nipples, underwear,EasyNegative, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans,extra fingers,fewer fingers,((watermark:2)),(white letters:1), (multi nipples), lowres, bad anatomy, bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worst quality, low qualitynormal quality, jpeg artifacts, signature, watermark, username,bad feet, {Multiple people},lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar lowres,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,extra arms,missing legs,wrong feet bottom render,extra digit,abdominal stretch, glans, pants, briefs, knickers, kecks, thong, {{fused fingers}}, {{bad body}}, ((long hair))",
        };
        var response = await axios.post(`${url.toString()}`, request);
        return response.data;
    }
);

const tabsSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        switchTab: (state, action: PayloadAction<number>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.selectedTab = state.tabs[action.payload];
        },
        selectTag: (state, action: PayloadAction<Tag>) => {
            const tag = action.payload;
            if (state.selectedTags.some((t) => t.id === tag.id)) {
                state.selectedTags = state.selectedTags.filter((t) => t.id !== tag.id);
            } else {
                state.selectedTags.push(tag);
            }
        },
        setServer: (state, action: PayloadAction<SDServer>) => {
            state.server.data = action.payload;
            console.log("server", state.server.data);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTabs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTabs.fulfilled, (state, action) => {
                state.loading = false;
                state.tabs = action.payload;
                state.selectedTab = state.tabs[0];
            })
            .addCase(fetchTabs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch tabs";
            })
            .addCase(fetchPromptsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPromptsAsync.fulfilled, (state, action) => {
                state.loading = false;
                const tabIndex = state.tabs.findIndex((t) => t.id === action.meta.arg.categoryId);
                state.tabs[tabIndex].tags = action.payload.map((p) => ({
                    id: p.id,
                    tag: p.attributes.tag,
                    title: p.attributes.title,
                    selected: false,
                }));
            })
            .addCase(fetchPromptsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch tabs";
            })
            // generate text to image
            .addCase(generateTextToImage.pending, (state) => {
                state.server.status = "loading";
                console.log("state.server.status", state.server.status);
                state.error = null;
            })
            .addCase(generateTextToImage.fulfilled, (state, action) => {
                state.server.status = "succeeded";
                console.log("state.server.status", state.server.status);
                console.dir("generateTextToImage.result", action.payload);
            })
            .addCase(generateTextToImage.rejected, (state, action) => {
                state.server.status = "failed";
                console.log("state.server.status", state.server.status);
            });
    },
});

export const getTabs = (state: RootState) => state.category.tabs;
export const getSystemLanguage = (state: RootState) => state.locale.systemLanguage;
export const getSelectedTab = (state: RootState) => state.category.selectedTab;
export const getServer = (state: RootState) => state.category.server;

export const { selectTag, switchTab, setServer } = tabsSlice.actions;

export default tabsSlice.reducer;
