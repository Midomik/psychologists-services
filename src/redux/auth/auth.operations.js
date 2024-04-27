import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';

import { ref, set } from 'firebase/database';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import dataP from '../../data/psychologists.json';

export const addToUsersThunk = createAsyncThunk(
  'auth/add-data',
  async (formData, thunkApi) => {
    try {
      dataP.map(item => {
        const id = nanoid();
        return set(ref(db, 'doctors/' + id), { ...item, uid: id });
      });
      set(ref(db, 'users/' + formData.uid), formData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSignOut = createAsyncThunk(
  'auth/sign-out',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserData = createAsyncThunk(
  'auth/get-user-data',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      
    } catch (error) {
      console.log(error);
    }
  }
);
