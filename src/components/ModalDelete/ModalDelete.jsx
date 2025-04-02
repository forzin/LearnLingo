import styles from './ModalDelete.module.css';

const ModalDelete = ({ isOpen}) => {
    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ''}`}></div>
    );
}

export default ModalDelete;
