import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gqlClient } from "../../../app/api";
import { RootState } from "../../../app/store";

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

interface TabsState {
    tabs: Tab[];
    selectedTags: Tag[];
    loading: boolean;
    error: string | null;
    selectedTab: Tab | null;
}

const initialState: TabsState = {
    tabs: [],
    selectedTags: [],
    loading: false,
    error: null,
    selectedTab: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTabs.pending, (state) => {
                state.loading = true;
                console.log("fetchTabs.pending");
                state.error = null;
            })
            .addCase(fetchTabs.fulfilled, (state, action) => {
                state.loading = false;
                console.log("fetchTabs.fulfilled");
                state.tabs = action.payload;
            })
            .addCase(fetchTabs.rejected, (state, action) => {
                state.loading = false;
                console.log("fetchTabs.rejected");
                state.error = action.error.message ?? "Failed to fetch tabs";
            })
            .addCase(fetchPromptsAsync.pending, (state) => {
                state.loading = true;
                console.log("fetchPromptsAsync.pending");
                state.error = null;
            })
            .addCase(fetchPromptsAsync.fulfilled, (state, action) => {
                state.loading = false;
                console.log("fetchPromptsAsync.fulfilled");
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
                console.log("fetchPromptsAsync.rejected");
                state.error = action.error.message ?? "Failed to fetch tabs";
            });
    },
});

export const getTabs = (state: RootState) => state.category.tabs;
export const getSystemLanguage = (state: RootState) => state.locale.systemLanguage;
export const getSelectedTab = (state: RootState) => state.category.selectedTab;

export const { selectTag, switchTab } = tabsSlice.actions;

export default tabsSlice.reducer;
