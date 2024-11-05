import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, phone, id }) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.listItem}>
            <div className={styles.contactsInfo}>
               <h4>Name: {name}</h4>
               <p>Phone: {phone}</p>
            </div>
            <div>
                <button type='button' onClick={() => {
                    const action = deleteContact(id);
                    dispatch(action);
                }}>Delete</button>
            </div>
        </div>
    );
}

export default Contact; 