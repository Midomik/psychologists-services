import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDatabase, ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const addToUsersThunk = createAsyncThunk(
  'auth/add-data',
  async (formData, thunkApi) => {
    try {
      console.log(formData);
      set(ref(db, 'users/' + formData.uid), formData);
      console.log('succses');
    } catch (error) {
      console.log(error);
    }
  }
);
