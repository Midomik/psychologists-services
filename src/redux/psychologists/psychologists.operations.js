import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';

import { ref, remove, set } from 'firebase/database';

export const addToFavorites = createAsyncThunk(
  'psychologists/add-to-favorites',
  async (data, thunkApi) => {
    const favoritesRef = ref(
      db,
      `doctors/${data.uid}/favoritedBy/${data.userId}`
    );

    try {
      await set(favoritesRef, true);

      console.log('Doctor added to favorites successfully!');
    } catch (error) {
      console.error('Error adding doctor to favorites:', error);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'psychologists/remove-from-favorites',
  async (data, thunkApi) => {
    console.log(data);
    const favoritesRef = ref(
      db,
      `doctors/${data.uid}/favoritedBy/${data.userId}`
    );

    try {
      await remove(favoritesRef);

      console.log('Doctor added to favorites successfully!');
    } catch (error) {
      console.error('Error adding doctor to favorites:', error);
    }
  }
);
