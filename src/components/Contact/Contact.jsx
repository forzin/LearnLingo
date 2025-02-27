import styles from './Contact.module.css';
import icon from '../../img/icons/icons.svg';
import { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';


const Contact = ({ name, phone, id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpenModal = () => {
        setIsModalOpen(true);
    }

    const onCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={styles.listItem}>
            <div className={styles.contactsInfo}>
               <h4>Name: {name}</h4>
               <p>Phone: {phone}</p>
            </div>
            <div>
                <button className={styles.buttonDelete} type='button' onClick={onOpenModal}>
                    <svg
                        className={styles.iconCross}
                        width="15"
                        height="15"
                    >
                        <use href={`${icon}#icon-cross`}></use>
                    </svg>
                </button>
            </div>
            {isModalOpen && <ModalDelete
                id={id}
                isOpen={isModalOpen}
                onClose={onCloseModal}
                name={name}
            />}
        </div>
    );
}

export default Contact; 
