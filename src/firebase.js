import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAXbzIGZkGygiozdeWSfxed3PsJ9Dlav70',
  authDomain: 'psychologists-services-b7d3e.firebaseapp.com',
  databaseURL:
    'https://psychologists-services-b7d3e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologists-services-b7d3e',
  storageBucket: 'psychologists-services-b7d3e.appspot.com',
  messagingSenderId: '90710879013',
  appId: '1:90710879013:web:7a4da3314a163e54e708cc',
  measurementId: 'G-JLDMNBY2MY',
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app);
