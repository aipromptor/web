import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gqlClient } from "../../../app/api";
import { RootState } from "../../../app/store";
import { Api as SDAPI, StableDiffusionProcessingImg2Img, TextToImageResponse } from "../../stable-diffusion/Api";

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

interface SelectedPanelState {
    tabs: Tab[];
    selectedTags: Tag[];
    loading: boolean;
    error: string | null;
    selectedTab: Tab | null;
    server: SDServer;
}

const initialState: SelectedPanelState = {
    tabs: [],
    selectedTags: [],
    loading: false,
    error: null,
    selectedTab: null,
    server: { webUrl: "http://127.0.0.1:7860" }
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
            filter: { tag_marketings: { name: { eq: "homepage" } } },
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
                filters: { tag_marketings: { name: { eq: "homepage" } } },
            },
        });
        // The value we return becomes the `fulfilled` action payload
        const entities = response.data.category.data.attributes.hot_prompts.data as PromptEntity[];
        return entities;
    }
);

export const generateTextToImage =
    createAsyncThunk<TextToImageResponse, FetchPromptsArgs>(
        "sd/text2image",
        async (args, thunkAPI) => {
            const server = getServer(thunkAPI.getState() as RootState);
            const url = new URL(server.webUrl);
            const sd = new SDAPI({ baseUrl: url.toString() });

            const request = {
                "enable_hr": false,
                "denoising_strength": 0,
                "firstphase_width": 0,
                "prompt": "masterpiece, best quality, masterpiece,best quality,official art,extremely detailed CG unity 8k wallpaper, extremely delicate and beautiful, RAW photo,realistic,photo-realistic, ultra high res,depth of field,illustration,amazing,finely detail,huge filesize,ultra-detailed,highres,extremely detailed, <lora:koreanDollLikeness_v15:0.2>, <lora:shojovibe_v11:0.2>, <lora:chineseQingchunGirl:0.4>, in spring, girl, black hair, long hair, hair ribbon, light blush, light smile, black eyes, perfect eyes, slender thighs, jeans, brown cardigan , bobby socks, uwabaki, hair ribbon, hands_on_hips, collared shirt",
                "styles": [],
                "seed": -1,
                "subseed": -1,
                "subseed_strength": 0,
                "seed_resize_from_h": -1,
                "seed_resize_from_w": -1,
                "sampler_name": "DPM++ SDE Karras",
                "batch_size": 1,
                "n_iter": 1,
                "steps": 20,
                "cfg_scale": 7,
                "width": 540,
                "height": 960,
                "restore_faces": false,
                "tiling": false,
                "negative_prompt": "sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans, text, error, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature, (mole:1.4),NSFW",
                "s_churn": 0,
                "s_tmin": 0,
                "s_noise": 1,
                "override_settings_restore_afterwards": true,
                "script_args": [],
                "sampler_index": "Euler",
            };
            var response = await sd.sdapi.text2ImgapiSdapiV1Txt2ImgPost(request);
            return response.json();
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
            state.server = action.payload;
            console.log('server', state.server);
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
            });
    },
});

export const getTabs = (state: RootState) => state.category.tabs;
export const getSystemLanguage = (state: RootState) => state.locale.systemLanguage;
export const getSelectedTab = (state: RootState) => state.category.selectedTab;
export const getServer = (state: RootState) => state.category.server;

export const { selectTag, switchTab, setServer } = tabsSlice.actions;

export default tabsSlice.reducer;
