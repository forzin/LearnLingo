import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contactsData.contacts.items;
export const selectContactsIsLoading = state => state.contactsData.contacts.loading;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return Array.isArray(contacts) && contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );}
);