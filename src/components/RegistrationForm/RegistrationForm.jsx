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
     <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
       <Form className={styles.formList}>
          <label className={styles.inputContainer}>
            <span className={styles.formTitle}>Name:</span>
            <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='text'
                name='name'
                placeholder='John Marson'
              ></Field>
              <ErrorMessage
                className={styles.formErrorMsg}
                name='name'
                component='span'
              />
            </div>
          </label>
          <label className={styles.inputContainer}>
           <span className={styles.formTitle}>Email:</span>
           <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='text' name='email'
                placeholder='user@gmail.com'
              ></Field>
              <ErrorMessage
                className={styles.formErrorMsg}
                name='email'
                component='span'
              />
           </div>
          </label>
          <label className={styles.inputContainer}>
           <span className={styles.formTitle}>Password:</span>
           <div className={styles.msgContainer}>
              <Field
                className={styles.formField}
                type='password'
                name='password'
                placeholder='1Y3jfiori4'
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
   )
}

export default RegistrationForm;
