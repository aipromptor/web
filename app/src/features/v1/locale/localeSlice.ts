import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface LanguageState {
    code: string;
    id: string;
    text: string;
    checked: boolean;
}

export interface LocaleState {
    languages: LanguageState[];
    status: 'idle' | 'loading' | 'failed';
    language: string;
}

const initialState: LocaleState = {
    languages: [
        { code: 'en', id: '1', text: 'English', checked: true, },
        { code: 'zh-CN', id: '2', text: '中文简体', checked: true, }
    ],
    status: 'idle',
    language: 'zh-CN'
};

export const localeSlice = createSlice({
    name: 'locale',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggle: (state, action: PayloadAction<{ id: string, checked: boolean }>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            let index = state.languages.findIndex(l => l.id === action.payload.id);
            //language?.checked = action.payload.checked;
            state.languages[index].checked = action.payload.checked;
        },
    },
});

export const { toggle } = localeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const toggleLanguages = (state: RootState) => state.locale.languages;

export default localeSlice.reducer;
