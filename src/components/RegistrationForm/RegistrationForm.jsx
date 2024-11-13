import { ErrorMessage, Field, Formik, Form } from "formik";

import styles from './RegistrationForm.module.css'

import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’-]{2,50}$/;

const profileFormFilter = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required')
      .matches(nameRegex, 'Invalid name!'), 
    email: Yup.string()
     .email('Invalid email address')
     .required('Email is required'),
    password: Yup.string()
     .min(8, 'Password length must be at least 8 characters')
     .required('Password is required')
})

const RegistrationForm = () => {

    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
     
  };

   return (
     <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
       <Form className={styles.formList}>
          <label>
            <span className={styles.formTitle}>Name:</span>
            <Field type='text' name='name' placeholder='Danilov Danil'></Field>
            <ErrorMessage name='name' component='span' />
          </label>
          <label>
            <span className={styles.formTitle}>Email:</span>
            <Field type='text' name='email' placeholder='user@gmail.com'></Field>
            <ErrorMessage name='email' component='span' />
          </label>
          <label>
            <span className={styles.formTitle}>Password:</span>
            <Field type='password' name='password' placeholder='Qfhhd@kg'></Field>
            <ErrorMessage name='password' component='span' />
          </label>
          <button type='submit' className={styles.buttonDelete}>Sign Up</button>
       </Form>
     </Formik>
   )
}

export default RegistrationForm;