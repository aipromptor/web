import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import i18n from "i18next";

type LanguageOption = "en" | "zh-CN";

interface LanguageState {
    id: string;
    title: string;
}

interface LanguageSelectorState {
    languages: LanguageState[];
    selectedLanguages: LanguageState[];
}

const initialState: LanguageSelectorState = {
    languages: [
        { id: "en", title: "English" },
        { id: "zh-CN", title: "中文简体" },
    ],
    selectedLanguages: [
        { id: "en", title: "English" },
        { id: "zh-CN", title: "中文简体" },
    ],
};

const languageSelectorSlice = createSlice({
    name: "languageSelector",
    initialState,
    reducers: {
        setLanguages: (state, action: PayloadAction<LanguageState[]>) => {
            state.selectedLanguages = action.payload;
        },
    },
});

export const getLanguages = (state: RootState) => state.language.languages;
export const getSelectedLanguages = (state: RootState) => state.language.selectedLanguages;

export default languageSelectorSlice.reducer;
