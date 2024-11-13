import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance, clearToken, setToken } from "./userToken";
import toast from "react-hot-toast";
import { customToastOptions } from "../../components/ToastMessages/ToastMessages";


export const register = createAsyncThunk(
    'auth/register',
    async (registerData, thunkApi) => {
        try {
            const  { data }  = await authInstance.post('/users/signup', registerData);
            setToken(data.token);

            toast.success('Registration successfully!', customToastOptions);
            return data;
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (registerData, thunkApi) => {
        try {
            const  { data }  = await authInstance.post('/users/login', registerData);

            setToken(data.token);
            toast.success('Login successful!', customToastOptions);
            return data;   
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const token = state.auth.token;

        if(!token) {
            return thunkApi.rejectWithValue('No valid token');
        }

        try {
            setToken(token);
            const  { data }  = await authInstance.get('/users/current');
            
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            const  { data }  = await authInstance.post('/users/logout');

            clearToken();

            toast.success('Logout is successful!', customToastOptions);
            
            return data;
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);