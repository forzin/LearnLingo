import styles from '../RegistrationForm/RegistrationForm.module.css';
import icon from "../../img/icons/icons.svg";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

const profileFormFilter = Yup.object({
    email: Yup.string()
     .email('Invalid email address')
     .required('Email is required'),
    password: Yup.string()
     .min(8, 'Password length must be at least 8 characters')
     .required('Password is required')
})

const LoginForm = ({ isOpen, onCloseModal }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(profileFormFilter),
  });

  const dispatch = useDispatch();

  const handleSubmitButton = (values, actions) => {
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
          <form onSubmit={handleSubmit(handleSubmitButton)} className={styles.formList}>
              <div className={styles.msgContainer}>
                <input
                  {...register('email')}
                  className={styles.formField}
                  type='text'
                  name='email'
                  placeholder='Email'
                ></input>
                {errors.email && <p className={styles.formErrorMsg}>{errors.email.message}</p>}
              </div>
              <div className={styles.msgContainer}>
                <input
                  {...register('password')}
                  className={styles.formField}
                  type='password'
                  name='password'
                  placeholder='Password'
                ></input>
                {errors.password && <p className={styles.formErrorMsg}>{errors.password.message}</p>}
              </div>
            <button type='submit' className={styles.buttonRegister}>Log In</button>
        </form>
      </div>
    </div>
     
  )
}

export default LoginForm;