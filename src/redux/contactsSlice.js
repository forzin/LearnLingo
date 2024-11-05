import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from '../redux/filterSlice';

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
    .addCase(fetchContacts.pending, ( state ) => {
        state.contacts.loading = true;
        state.contacts.error = null;
    })
    .addCase(fetchContacts.fulfilled, ( state, action ) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, ( state, action ) => {
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
        state.contacts.loading = true;
        state.contacts.error = null;
    })
    .addCase(deleteContact.fulfilled, ( state, action ) => {
        state.contacts.loading= false;
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
    })
    .addCase(deleteContact.rejected, ( state, action ) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
    })
})

export const contactsReduser = contactSlice.reducer;
export const selectContacts = (state) => state.contactsData.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return Array.isArray(contacts) && contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );}
);

//export const { addContact, deleteContact} = contactSlice.actions;