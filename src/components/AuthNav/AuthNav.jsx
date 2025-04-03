import { useState } from "react";
import icon from "../../img/icons/icons.svg";
import styles from './AuthNav.module.css';
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const AuthNav = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  const onOpenModalLogin = () => {
    setIsOpenModalLogin(true);
  }
  const onOpenModalRegister = () => {
    setIsOpenModalRegister(true);
  }
  const onCloseModalLogin = () => {
    setIsOpenModalLogin(false);
  }
  const onCloseModalRegister = () => {
    setIsOpenModalRegister(false);
  }

    return (
      <>
        <div className={styles.linksContainer}>
          <button className={`${styles.userLinks} ${styles.login}`} onClick={onOpenModalLogin}>
            <svg className={styles.iconLogin} width="20" height="20">
              <use href={`${icon}#icon-log-in`}></use>
            </svg>
            Log In
          </button> 
          {isOpenModalLogin && <LoginForm isOpen={isOpenModalLogin} onCloseModal={onCloseModalLogin} />}
          <button className={`${styles.userLinks} ${styles.register}`} onClick={onOpenModalRegister}>
            Registration
          </button>
          {isOpenModalRegister && <RegistrationForm isOpen={isOpenModalRegister} onCloseModal={onCloseModalRegister} />}
        </div>
     </>
    );
}

export default AuthNav;