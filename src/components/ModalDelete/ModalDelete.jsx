import styles from './ModalDelete.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ModalDelete = ({ id, name, isOpen, onClose }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        const action = deleteContact(id);
        dispatch(action);
        onClose();
    };

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ''}`}>
            <div className={styles.modalContainer}>
                <p className={styles.modalText}>Are you sure to delete the contact with name: {name} ?</p>
                <div className={styles.modalButtonContainer}>
                    <button className={styles.modalButtonYes} onClick={handleDeleteClick}>YES</button>
                    <button className={styles.modalButtonNo} onClick={onClose}>NO</button>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;
