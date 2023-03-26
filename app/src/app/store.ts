import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import localeReducer from '../features/v1/locale/slice';
import languageReducer from '../features/v1/language/slice';
import scopeTabSlice from '../features/v1/top-nav/categoryTopNavSlice';
import tabsSlice from '../features/v1/selected-panel/slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  locale: localeReducer,
  language: languageReducer,
  scope: scopeTabSlice,
  category: tabsSlice,
});

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
