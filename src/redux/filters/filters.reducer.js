import { createSlice } from '@reduxjs/toolkit';
import options from '../../data/filter';

const initialState = {
  filterQuery: null,
  options,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
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

export const filtersReducer = filtersSlice.reducer;
