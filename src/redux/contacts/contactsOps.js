import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/userToken";
import toast from "react-hot-toast";
import { customToastOptions } from "../../components/ToastMessages/ToastMessages";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const  { data }  = await authInstance.get('/contacts');

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkApi) => {
        try {
            const  { data }  = await authInstance.post('/contacts', newContact);
            
            toast.success('Add contact is successfully!', customToastOptions);
            return data;
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const { data } = await authInstance.delete(`/contacts/${contactId}`);
            
            toast.success('Successfully deleted!', customToastOptions);
            return data;
        } catch (error) {
            toast.error('Opss.... Somethig wrong!', customToastOptions);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);