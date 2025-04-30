import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/userToken";
import { ref, get, child } from "firebase/database";
import { rtdb } from "../../../firebaseConfig";
import toast from "react-hot-toast";
import { customToastOptions } from "../../components/ToastMessages/ToastMessages";

export const fetchTeachers = createAsyncThunk(
    'teachers/fetchAll',
    async (_, thunkApi) => {
        try {
            const dbRef = ref(rtdb);
            const snapshot = await get(child(dbRef, "teachers")); 

            if (snapshot.exists()) {
                const data = snapshot.val();

                console.log("Отримані дані з Firebase:", data);
                
                return Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
            } else {
                console.log("Даних не знайдено у гілці 'teachers'");
                return [];
            }
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