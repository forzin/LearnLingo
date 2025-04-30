import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
const Teacher = React.lazy(() => import('../Teacher/Teacher.jsx'));

import styles from './TeachersList.module.css';
import { selectContacts, selectContactsIsLoading, selectFilteredContacts } from '../../redux/contacts/selectors.js';

import { fetchTeachers } from '../../redux/contacts/operations.js';


const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts);
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectContactsIsLoading);

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [dispatch]);
    
    return (
        <div className={styles.contactList}>
            {isLoading && <p>...Loading</p>}
            {Array.isArray(contacts) && contacts.length === 0 && (
                <p className={styles.contactMessage}>There are no contacts in your phonebook yet!</p>
            )}
            {Array.isArray(filter) && contacts.length > 0 && filter.map(contactsItem => {
                return (
                    <Teacher 
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