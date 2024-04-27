

import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.reducer';
import { psychologistsReducer } from './psychologists/psychologists.reducer';
import { modalReducer } from './modal/modal.reducer';
import { authReducer } from './auth/auth.reducer';



export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    psychologists: psychologistsReducer,
    modal: modalReducer,
    auth: authReducer,
  },


});


