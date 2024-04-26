import { createSlice } from '@reduxjs/toolkit';
import { doctors } from '../../data/psychologists';
import { addToUsersThunk } from './auth.operations';

const initialState = {
  userData: { name: '', email: '', avatarURL: '', id: '' },
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(addToUsersThunk.fulfilled, (state, action) => {
      state.authenticated = true;
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

export const psychologistsReducer = authSlice.reducer;
