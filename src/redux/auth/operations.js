import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { customToastOptions } from "../../components/ToastMessages/ToastMessages";
import { setToken } from "./userToken";

import { auth, db } from '/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';


export const register = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, thunkApi) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name });

            const token = await user.getIdToken(); 
            setToken(token);

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: name,
                email: email,
                createdAt: new Date().toISOString()
            });

            toast.success('Registration successfully!', customToastOptions);
            return {
                uid: user.uid,
                email: user.email,
                name: name,
                accessToken: token,
            };
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkApi) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            toast.success('Login successful!', customToastOptions);
            return {
                uid: user.uid,
                email: user.email,
                accessToken: token
            };   
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        unsubscribe();

        if (user) {
          try {
            const token = await user.getIdToken(); 
            resolve({
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
              token: token, // тепер тут — вже строка, не Promise
            });
          } catch (err) {
            reject(thunkApi.rejectWithValue('Failed to get token'));
          }
        } else {
          reject(thunkApi.rejectWithValue('No user logged in'));
        }
      });
    });
  }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            await signOut(auth);
            toast.success('Logout successful!', customToastOptions);
            return null;
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);