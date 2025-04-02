import { NavLink } from 'react-router-dom';
import icon from "../../img/icons/icons.svg";

import styles from './AuthNav.module.css';

const AuthNav = () => {
    return (
      <>
        <div className={styles.linksContainer}>
          <NavLink className={`${styles.userLinks} ${styles.login}`} to='/login'>
            <svg className={styles.iconLogin} width="20" height="20">
              <use href={`${icon}#icon-log-in`}></use>
            </svg>
            Log In
          </NavLink>
          <NavLink className={`${styles.userLinks} ${styles.register}`} to='/register'>Registration</NavLink>
        </div>
     </>
    );
}

export default AuthNav;