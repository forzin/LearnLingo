import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
const Contact = React.lazy(() => import('../Contact/Contact'));

import styles from './ContactList.module.css';
import { selectContacts, selectContactsIsLoading, selectFilteredContacts } from '../../redux/contacts/contactsSlice';

import { fetchContacts } from '../../redux/contacts/operations';


const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts);
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectContactsIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <div className={styles.contactList}>
            {isLoading && <p>...Loading</p>}
            {Array.isArray(contacts) && contacts.length === 0 && (
                <p className={styles.contactMessage}>There are no contacts in your phonebook yet!</p>
            )}
            {Array.isArray(filter) && contacts.length > 0 && filter.map(contactsItem => {
                return (
                    <Contact 
                       key={contactsItem.id}
                       id={contactsItem.id}
                       name={contactsItem.name}
                       phone={contactsItem.number}              
                    />
                )
            })}
        </div>
    );
}

export default ContactList;