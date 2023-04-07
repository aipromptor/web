import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";
import { RootState } from "../../../app/store";

type CountryOption = "CN" | "US";

interface CountryState {
    code: CountryOption;
    title: string;
}

interface LocaleSelectorState {
    countries: CountryState[];
    locale: CountryState;
    systemLanguage: string;
}

export function getFlagEmoji(countryCode: string) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

const initialState: LocaleSelectorState = {
    countries: [
        { code: "CN", title: "中国" },
        { code: "US", title: "美国" },
    ],
    locale: { code: "CN", title: "中国" },
    systemLanguage: i18n.language,
};
console.log("initialState", initialState);

const localeSelectorSlice = createSlice({
    name: "localeSelector",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<CountryOption>) => {},
        setSystemLanguage: (state, action: PayloadAction<string>) => {
            i18n.changeLanguage(action.payload);
        },
        detectSystemLanguage: (state, action: PayloadAction<string>) => {
            state.systemLanguage = action.payload;
        },
    },
});

export const getCountries = (state: RootState) => state.locale.countries;
export const getLocale = (state: RootState) => state.locale.locale;
export const getSystemLanguage = (state: RootState) => state.locale.systemLanguage;

export const { setLocale, setSystemLanguage, detectSystemLanguage } = localeSelectorSlice.actions;

export default localeSelectorSlice.reducer;
