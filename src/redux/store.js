// import { configureStore } from '@reduxjs/toolkit';

import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.reducer';
import { psychologistsReducer } from './psychologists/psychologists.reducer';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const favoritesConfig = {
//   key: 'exampleFiled',
//   storage,
//   whitelist: ['exampleFiled'],
// };

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    psychologists: psychologistsReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
