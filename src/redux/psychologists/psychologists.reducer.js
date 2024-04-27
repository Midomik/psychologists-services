import { createSlice } from '@reduxjs/toolkit';
// import { doctors } from '../../data/psychologists';

const initialState = {
  doctors: null,
  favorite: null,
  isLoading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {},
  extraReducers: builder => builder,
  // .addCase(getCategories.fulfilled, (state, action) => {
  //   state.categories = action.payload;
  //   state.isLoading = false;
  //   state.error = null;
  // })
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

export const psychologistsReducer = psychologistsSlice.reducer;
