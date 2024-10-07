import styles from './Contact.module.css';

const Contact = ({ name, phone, onDeleteContact, id }) => {
    
    return (
        <div className={styles.listItem}>
            <div className={styles.contactsInfo}>
               <h4>Name: {name}</h4>
               <p>Phone: {phone}</p>
            </div>
            <div>
                <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Contact; 