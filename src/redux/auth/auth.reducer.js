import { createSlice } from '@reduxjs/toolkit';

import { addToUsersThunk } from './auth.operations';

const initialState = {
  userData: null,
  authenticated: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveData: (state, { payload }) => {
      state.userData = payload;
    },
    isAuth: (state, { payload }) => {
      state.authenticated = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(addToUsersThunk.fulfilled, (state, { payload }) => {
      state.userData = payload;
    }),
});

export const authReducer = authSlice.reducer;
export const { saveData, isAuth } = authSlice.actions;
