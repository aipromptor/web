import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import localeReducer from '../features/v1/locale/localeSlice';
import scopeTabSlice from '../features/v1/top-nav/categoryTopNavSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    locale: localeReducer,
    scope: scopeTabSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
