import { createSlice } from '@reduxjs/toolkit';

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
});

export const psychologistsReducer = psychologistsSlice.reducer;
