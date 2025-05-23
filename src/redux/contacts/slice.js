import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers, addContact, deleteContact } from "./operations";
import { logout } from '../auth/operations';

const INITIAL_STATE = {
    contacts: {
       items: [],
       loading: false,
       error: null
    }
}

const contactSlice = createSlice ({
    name: 'contacts',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(fetchTeachers.pending, ( state ) => {
        state.contacts.loading = true;
        state.contacts.error = null;
    })
    .addCase(fetchTeachers.fulfilled, ( state, action ) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
    })
    .addCase(fetchTeachers.rejected, ( state, action ) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
    })
    
    .addCase(addContact.pending, ( state ) => {
        state.contacts.loading = true;
        state.contacts.error = null;
    })
    .addCase(addContact.fulfilled, ( state, action ) => {
        state.contacts.loading= false;
        state.contacts.items.push(action.payload);
    })
    .addCase(addContact.rejected, ( state, action ) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
    })
    
    .addCase(deleteContact.pending, ( state ) => {
        state.contacts.error = null;
    })
    .addCase(deleteContact.fulfilled, ( state, action ) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id)
    })
    .addCase(deleteContact.rejected, ( state, action ) => {
        state.contacts.error = action.payload;
    })

    .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
    })
    .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
})

export const contactsReduser = contactSlice.reducer;



