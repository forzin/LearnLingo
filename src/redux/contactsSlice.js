import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    contacts: []
}

const contactSlice = createSlice ({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    },
})

export const contactsReduser = contactSlice.reducer;
export const selectContacts = (state) => state.contactsData.contacts;
export const { addContact, deleteContact} = contactSlice.actions;