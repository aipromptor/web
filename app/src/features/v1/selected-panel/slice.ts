import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { gqlClient } from '../../../app/api';
import { gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState, AppThunk, store } from '../../../app/store';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

interface Tag {
    id: string;
    name: string;
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
}

const initialState: TabsState = {
    tabs: [],
    selectedTags: [],
    loading: false,
    error: null,
};

interface CategoryEntity {
    id: string;
    attributes: {
        name: string;
        title: string;
    }
}

export const fetchTabs = createAsyncThunk(
    'tabs/fetchTabs',
    async (_, { getState }) => {
        // const language = store.getState().locale.language;
        //const language = useAppSelector((state: RootState) => state.locale.language);
        //const language = getLanguage(getState() as RootState);
        const language ='zh-CN';
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
                'locale': language,
                'filter': { "tag_marketings": { "name": { "eq": "homepage" } } },
            }
        });
        // The value we return becomes the `fulfilled` action payload
        const entities = response.data.categories.data as CategoryEntity[];
        const tabs = entities.map(e =>
        ({
            id: e.id,
            name: e.attributes.title,
            tags: []
        })) as Tab[];
        console.log(tabs);
        return tabs;
    });

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
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
                console.log('fetchTabs.pending');
                state.error = null;
            })
            .addCase(fetchTabs.fulfilled, (state, action) => {
                state.loading = false;
                console.log('fetchTabs.fulfilled');
                state.tabs = action.payload;
            })
            .addCase(fetchTabs.rejected, (state, action) => {
                state.loading = false;
                console.log('fetchTabs.rejected');
                state.error = action.error.message ?? 'Failed to fetch tabs';
            });
    },
});

export const getTabs = (state: RootState) => state.category.tabs;

export const { selectTag } = tabsSlice.actions;
export default tabsSlice.reducer;
