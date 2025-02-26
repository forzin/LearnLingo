import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import icon from '../../img/icons/icons.svg';


const Contact = ({ name, phone, id }) => {

    const dispatch = useDispatch();

    const onDelete = () => {
        const action = deleteContact(id);
        dispatch(action);
    }

    return (
        <div className={styles.listItem}>
            <div className={styles.contactsInfo}>
               <h4>Name: {name}</h4>
               <p>Phone: {phone}</p>
            </div>
            <div>
                <button className={styles.buttonDelete} type='button' onClick={onDelete}>
                    <svg
                        className={styles.iconCross}
                        width="15"
                        height="15"
                    >
                        <use href={`${icon}#icon-cross`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Contact; 