import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: null,
  favorite: null,
  isLoading: false,
  error: null,
  favorites: [],
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites = [...state.favorites, payload];
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
  },
});

export const psychologistsReducer = psychologistsSlice.reducer;
export const { addToFavorites, removeFromFavorites } =
  psychologistsSlice.actions;
