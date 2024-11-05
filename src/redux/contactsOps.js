import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const  { data }  = await axios.get('https://6727a500270bd0b97553310b.mockapi.io/contacts');

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkApi) => {
        try {
            const  { data }  = await axios.post('https://6727a500270bd0b97553310b.mockapi.io/contacts', newContact);

            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (idContact, thunkApi) => {
        try {
            await axios.delete(`https://6727a500270bd0b97553310b.mockapi.io/contacts/${idContact}`);

            return idContact;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);