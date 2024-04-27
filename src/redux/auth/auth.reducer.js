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
  // .addCase(getIngredients.fulfilled, (state, action) => {
  //   state.ingredients = action.payload;
  //   state.isLoading = false;
  //   state.error = null;
  // })
  // .addCase(getGlasses.fulfilled, (state, action) => {
  //   state.glasses = action.payload;
  //   state.isLoading = false;
  //   state.error = null;
  // })
  // .addMatcher(
  //   isAnyOf(
  //     getCategories.pending,
  //     getIngredients.pending,
  //     getGlasses.pending
  //   ),
  //   (state) => {
  //     state.isLoading = true;
  //   }
  // )

  // .addMatcher(
  //   isAnyOf(
  //     getCategories.rejected,
  //     getIngredients.rejected,
  //     getGlasses.rejected
  //   ),
  //   (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   }
  // ),
});

export const authReducer = authSlice.reducer;
export const { saveData, isAuth } = authSlice.actions;
