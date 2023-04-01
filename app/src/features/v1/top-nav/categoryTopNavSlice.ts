import { gql } from '@apollo/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gqlClient } from '../../../app/api';
import { AppThunk, RootState } from '../../../app/store';

export interface Prompt {
    tag: string;
    id: string;
    title: string;
    selected: boolean;
}

export interface PartialScopeState {
    code: string;
    id: string;
    text: string;
    selected: boolean;
    prompts: Prompt[];
}

export interface TabState {
    tabs: PartialScopeState[];
    selectedIndex: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TabState = {
    tabs: [],
    status: 'idle',
    selectedIndex: -1,
};


interface CategoryEntity {
    id: string;
    attributes: {
        name: string;
        title: string;
    }
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const scopeNavs = (state: RootState) => state.scope.tabs;
export const selectedIndex = (state: RootState) => state.scope.selectedIndex;
export const selectedTab = (state: RootState) => {
    if (state.scope.selectedIndex >= 0) {
        return state.scope.tabs[state.scope.selectedIndex];
    }
    return null;
};

export const fetchScopesAsync = createAsyncThunk(
    'scope/fetch',
    async () => {
        const query = gql`query listCategories($locale: I18NLocaleCode, $filter: CategoryFiltersInput) {
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
            query: query, variables:
            {
                'locale': 'zh-CN',
                'filter': { "tag_marketings": { "name": { "eq": "homepage" } } },
            }
        });
        // The value we return becomes the `fulfilled` action payload
        const entities = response.data.categories.data as CategoryEntity[];
        return entities;
    }
);

interface PromptEntity {
    id: string;
    attributes: {
        tag: string;
        title: string;
    }
}

export const fetchPromptsAsync = createAsyncThunk(
    'prompts/fetch',
    async (id: string) => {
        const query = gql`query listPrompts(
            $locale: I18NLocaleCode
            $id: ID
            $filters: PromptFiltersInput
          ) {
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
        const response = await gqlClient.query({
            query: query, variables:
            {
                'locale': 'zh-CN',
                'id': id,
                "filters": { "tag_marketings": { "name": { "eq": "homepage" } } }
            }
        });
        // The value we return becomes the `fulfilled` action payload
        const entities = response.data.category.data.attributes.hot_prompts.data as PromptEntity[];
        return entities;
    }
);

export const scopeTabSlice = createSlice({
    name: 'scope-tab',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        switchTab: (state, action: PayloadAction<number>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.selectedIndex = action.payload;
        },

        togglePrompt: (state, action: PayloadAction<{ scopeIndex: number, promptIndex: number }>) => {
            const currentTab = state.tabs[action.payload.scopeIndex];
            const togglePrompt = currentTab.prompts[action.payload.promptIndex];
            togglePrompt.selected = !togglePrompt.selected;
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchScopesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchScopesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.tabs = action.payload.map(e => (
                    {
                        id: e.id,
                        code: e.attributes.name,
                        text: e.attributes.title,
                        selected: false,
                        prompts: []
                    }));

                if (state.tabs.length > 0) {
                    state.selectedIndex = 0;
                }
            })
            .addCase(fetchScopesAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchPromptsAsync.pending, (state) => {
            })
            .addCase(fetchPromptsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.tabs[state.selectedIndex].prompts = action.payload.map(p => (
                    {
                        id: p.id,
                        tag: p.attributes.tag,
                        title: p.attributes.title,
                        selected: false,
                    }));
            })
            .addCase(fetchPromptsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { switchTab, togglePrompt } = scopeTabSlice.actions;


export const fetchPromptsBySelectTab = (index: number): AppThunk => (dispatch, getState) => {
    if (index >= 0) {
        const currentTab = selectedTab(getState());
        if (currentTab != null) {
            if (currentTab.prompts.length === 0)
                dispatch(fetchPromptsAsync(currentTab.id));
        }
    }
};


export default scopeTabSlice.reducer;