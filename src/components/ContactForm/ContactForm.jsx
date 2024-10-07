import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './ContactForm.module.css';

import * as Yup from 'yup';

const initialValues = {
    name: '',
    phone: '',
}

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’-]{2,50}$/;

const profileFormFilter = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3 characters').max(50, 'Name must be less than 50 characters').required('Name is required').matches(nameRegex, 'Invalid name!'), 
    phone: Yup.string().required('Phone is required').matches(phoneRegex, 'Invalid phone number!'),
})

const ContactForm = ({ onAddContact }) => {

    const handleSubmit = values => {
        onAddContact(values);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
            <Form className={styles.formList}>
                <label>
                    <span className={styles.formTitle}>Name:</span>
                    <Field type='text' name='name' placeholder='Danilov Danil'></Field>
                    <ErrorMessage name='name' component='span' />
                </label>
                <label>
                    <span className={styles.formTitle}>Phone:</span>
                    <Field type='text' name='phone' placeholder='+380 xxxxx xxx'></Field>
                    <ErrorMessage name='phone' component='span' />
                </label>
                <button type='submit' className={styles.buttonDelete}>Add Contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm; 