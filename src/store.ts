import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import baseApi from './api/api';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);

export const clearStore = async () => {
  await persistor.purge();
};

export const getStore = () => ({persistor, store});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
