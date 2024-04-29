import { configureStore } from '@reduxjs/toolkit';
import { psychologistsReducer } from './psychologists/psychologists.reducer';
import { modalReducer } from './modal/modal.reducer';
import { authReducer } from './auth/auth.reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const psychologistsConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    psychologists: persistReducer(psychologistsConfig, psychologistsReducer),
    modal: modalReducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
