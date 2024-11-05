import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {

    const filter = useSelector(selectFilteredContacts);
    
    return (
        <div className={styles.contactList}>
            {Array.isArray(filter) && filter.map(contactsItem => {
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