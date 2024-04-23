import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXbzIGZkGygiozdeWSfxed3PsJ9Dlav70',
  authDomain: 'psychologists-services-b7d3e.firebaseapp.com',
  projectId: 'psychologists-services-b7d3e',
  storageBucket: 'psychologists-services-b7d3e.appspot.com',
  messagingSenderId: '90710879013',
  appId: '1:90710879013:web:7a4da3314a163e54e708cc',
  measurementId: 'G-JLDMNBY2MY',
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
