import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ filtretedContacts, onDeleteContact }) => {
    return (
        <div className={styles.contactList}>
            {filtretedContacts.map(contactsItem => {
                return (
                    <Contact 
                       key={contactsItem.id}
                       id={contactsItem.id}
                       name={contactsItem.name}
                       phone={contactsItem.phone}
                       onDeleteContact={onDeleteContact}              
                    />
                )
            })}
        </div>
    );
}

export default ContactList;