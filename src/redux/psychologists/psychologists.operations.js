import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';

// import { app, auth } from '../../firebase';
// import { getFirestore, addDoc, collection } from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';
// import { dataRef } from '../../firebase';
import { ref, remove, set } from 'firebase/database';

export const addToFavorites = createAsyncThunk(
  'psychologists/add-to-favorites',
  async (data, thunkApi) => {
    const favoritesRef = ref(
      db,
      `doctors/${data.uid}/favoritedBy/${data.userId}`
    );
    // const doctorRef = ref(db, `doctors/${data.uid}`);

    try {
      await set(favoritesRef, true);
      // await update(doctorRef, { is_favorited: true });

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
    // const doctorRef = ref(db, `doctors/${data.uid}`);

    try {
      await remove(favoritesRef);
      // await update(doctorRef, { is_favorited: true });

      console.log('Doctor added to favorites successfully!');
    } catch (error) {
      console.error('Error adding doctor to favorites:', error);
    }
  }
);
