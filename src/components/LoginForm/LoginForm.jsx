import styles from '../RegistrationForm/RegistrationForm.module.css';
import icon from "../../img/icons/icons.svg";

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

const LoginForm = ({isOpen, onCloseModal}) => {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();    
  };

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.formContainer}>
        <button onClick={onCloseModal} className={styles.closeBtn}>
          <svg className={styles.iconHero} width="32" height="32">
            <use href={`${icon}#icon-x`}></use>
          </svg>
        </button>
        <h2 className={styles.formListTitle}>Log In</h2>
        <p className={styles.formListText}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
        <Formik initialValues={initialValues} validationSchema={profileFormFilter} onSubmit={handleSubmit}>
          <Form className={styles.formList}>
              <label>
                <div className={styles.msgContainer}>
                  <Field
                    className={styles.formField}
                    type='text'
                    name='email'
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
              <button type='submit' className={styles.buttonRegister}>Log In</button>
          </Form>
        </Formik>
      </div>
    </div>
     
  )
}

export default LoginForm;