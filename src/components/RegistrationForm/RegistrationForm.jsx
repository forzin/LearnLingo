import icon from "../../img/icons/icons.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from './RegistrationForm.module.css'
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register as registerUser } from '../../redux/auth/operations';

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

const RegistrationForm = ({ isOpen, onCloseModal }) => {
  const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: '',
        email: '',
        password: ''
      },
      resolver: yupResolver(profileFormFilter),
    });

  const dispatch = useDispatch();

  const handleSubmitButton = (values) => {
    dispatch(registerUser(values));
    reset();
  };

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.formContainer}>
        <button onClick={onCloseModal} className={styles.closeBtn}>
          <svg className={styles.iconHero} width="32" height="32">
            <use href={`${icon}#icon-x`}></use>
          </svg>
        </button>
        <h2 className={styles.formListTitle}>Registration</h2>
        <p className={styles.formListText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
        <form onSubmit={handleSubmit(handleSubmitButton)} className={styles.formList}>
          <div className={styles.msgContainer}>
            <input
              {...register('name')}
              className={styles.formField}
              type='text'
              name='name'
              placeholder='Name'
            ></input>
            {errors.name && <p className={styles.formErrorMsg}>{errors.name.message}</p>}
          </div>
          <div className={styles.msgContainer}>
            <input
              {...register('email')}
              className={styles.formField}
              type='text' name='email'
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
          <button type='submit' className={styles.buttonRegister}>Sign Up</button>
        </form>
     </div>
    </div>
   )
}

export default RegistrationForm;
