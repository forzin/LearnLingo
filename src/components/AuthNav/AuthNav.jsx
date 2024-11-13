import { activeLink } from "../Navigation/Navigation";
import { NavLink } from 'react-router-dom';

import styles from '../Navigation/Navigation.module.css';

const AuthNav = () => {
    return (
      <>
        <div className={styles.linkList}>
          <NavLink className={activeLink} to='/register'>Register</NavLink>
          <NavLink className={activeLink} to='/login'>Login</NavLink>
        </div>
     </>
    );
}

export default AuthNav;