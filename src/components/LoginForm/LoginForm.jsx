import styles from '../RegistrationForm/RegistrationForm.module.css'

import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Formik, Form } from "formik";

import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

const initialValues = {
    email: '',
    password: ''
}

const profileFormFilter = Yup.object({
    email: Yup.string()
     .email('Invalid email address')
     .required('Email is required'),
    password: Yup.string()
     .min(8, 'Password length must be at least 8 characters')
     .required('Password is required')
})

const LoginForm = () => {

    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();    
  };

   return (
     <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
       <Form className={styles.formList}>
          <label className={styles.inputContainer}>
           <span className={styles.formTitle}>Email:</span>
           <div className={styles.msgContainer}>
             <Field
               className={styles.formField}
               type='text'
               name='email'
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
               placeholder='Qfhhd@kg'
             ></Field>
             <ErrorMessage
               className={styles.formErrorMsg}
               name='password'
               component='span'
             /> 
           </div>
          </label>
          <button type='submit' className={styles.buttonRegister}>Sign In</button>
       </Form>
     </Formik>
   )
}

export default LoginForm;