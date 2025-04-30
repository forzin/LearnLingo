import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAcq4g-E-2WSwurlIBgDCywkCM675qeFo",
  authDomain: "lingo-92f03.firebaseapp.com",
  databaseURL: "https://lingo-92f03-default-rtdb.firebaseio.com",
  projectId: "lingo-92f03",
  storageBucket: "lingo-92f03.firebasestorage.app",
  messagingSenderId: "560641857627",
  appId: "1:560641857627:web:47a540bf83e1e2dc2a877e",
  measurementId: "G-11S4ZJ2FJF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const auth = getAuth(app);