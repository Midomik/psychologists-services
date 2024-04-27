import { createSlice } from '@reduxjs/toolkit';
import options from '../../data/filter';

const initialState = {
  filterQuery: 'A to Z',
  options,
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterQuery: (state, { payload }) => {
      state.filterQuery = payload;
    },
  },
  extraReducers: builder => builder,
 
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilterQuery } = filtersSlice.actions;
