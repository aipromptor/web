import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import localeReducer from "../features/v1/locale/slice";
import languageReducer from "../features/v1/language/slice";
import tabsSlice from "../features/v1/selected-panel/slice";

import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { detectSystemLanguage } from "../features/v1/locale/slice";

const rootReducer = combineReducers({
    counter: counterReducer,
    locale: localeReducer,
    language: languageReducer,
    category: tabsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});

i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en",
        ns: ["translations", "actions", "navigates", "labels"],
        defaultNS: "translations",
        debug: true,
        partialBundledLanguages: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })
    .then(() => {
        const language = i18n.language;
        store.dispatch(detectSystemLanguage(language));
    });

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
