import { createAsyncThunk } from '@reduxjs/toolkit';
// import { app, auth } from '../../firebase';
// import { getFirestore, addDoc, collection } from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';
// import { dataRef } from '../../firebase';
import { getDatabase, ref, set } from 'firebase/database';

export const loadData = createAsyncThunk(
  'auth/load-data',
  async (formData, thunkApi) => {
    try {
    } catch (error) {
      console.log(error);
    }
  }
);
