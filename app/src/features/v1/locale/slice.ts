import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk, store } from "../../../app/store";

type CountryOption = "CN" | "US";

interface CountryState {
    code: CountryOption;
    title: string;
}

interface LocaleSelectorState {
    countries: CountryState[];
    locale: CountryState;
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
};

const localeSelectorSlice = createSlice({
    name: "languageSelector",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<CountryOption>) => {},
    },
});

export const getCountries = (state: RootState) => state.locale.countries;
export const getlocale = (state: RootState) => state.locale.locale;

export const { setLocale } = localeSelectorSlice.actions;

export default localeSelectorSlice.reducer;
