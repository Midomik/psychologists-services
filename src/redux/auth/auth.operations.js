import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';

import { ref, set } from 'firebase/database';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import dataP from '../../data/psychologists.json';

export const addToUsersThunk = createAsyncThunk(
  'auth/add-data',
  async (formData, thunkApi) => {
    try {
      console.log(formData);
      dataP.map(item => {
        const id = nanoid();
        return set(ref(db, 'doctors/' + id), { ...item, uid: id });
      });
      set(ref(db, 'users/' + formData.uid), formData);
      console.log('succses');
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
      console.log('User signed out successfully');
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
      console.log('User signed out successfully');
    } catch (error) {
      console.log(error);
    }
  }
);

// export const isAuth = createAsyncThunk(
//   'auth/is-auth',
//   async (formData, thunkApi) => {
//     try {
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
