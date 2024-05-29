import {
  configureStore,
  ConfigureStoreOptions,
  combineReducers,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import pokemons from './pokemons';

const rootReducer = combineReducers({
  pokemons,
});

const createStore = (options?: ConfigureStoreOptions['preloadedState']) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    ...options,
  });

export const store = createStore();
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
