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
      .min(2, 'Name must be at least 2 characters')
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
    <div className={styles.formContainer}>
      <h2 className={styles.formListTitle}>Registration</h2>
      <p className={styles.formListText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
      <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
       <Form className={styles.formList}>
          <label>
            <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='text'
                name='name'
                placeholder='Name'
              ></Field>
              <ErrorMessage
                className={styles.formErrorMsg}
                name='name'
                component='span'
              />
            </div>
          </label>
          <label>
           <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='text' name='email'
                placeholder='Email'
              ></Field>
              <ErrorMessage
                className={styles.formErrorMsg}
                name='email'
                component='span'
              />
           </div>
          </label>
          <label>
           <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='password'
                name='password'
                placeholder='Password'
              ></Field>
              <ErrorMessage
                className={styles.formErrorMsg}
                name='password'
                component='span'
              />
           </div>
          </label>
          <button type='submit' className={styles.buttonRegister}>Sign Up</button>
       </Form>
      </Formik>
     </div>
   )
}

export default RegistrationForm;
