import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filterSlice';

const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filtretedContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
        <div className={styles.contactList}>
            {filtretedContacts.map(contactsItem => {
                return (
                    <Contact 
                       key={contactsItem.id}
                       id={contactsItem.id}
                       name={contactsItem.name}
                       phone={contactsItem.phone}              
                    />
                )
            })}
        </div>
    );
}

export default ContactList;