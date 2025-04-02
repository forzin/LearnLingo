import React from "react";

import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink} from 'react-router-dom';

const AuthNav = React.lazy(() => import('../AuthNav/AuthNav'));
const UserMenu = React.lazy(() => import('../UserMenu/UserMenu'));

import icon from "../../img/icons/icons.svg";

import styles from './AppBar.module.css';
import stylesContainer from '/src/App.module.css';

const AppBar = () => {

  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

    return (
      <div className={`${styles.appBarContainer} ${stylesContainer.container}`}>
        <div className={styles.logoContainer}>
          <svg className={styles.logoIcon} width="28" height="28">
            <use href={`${icon}#icon-ukraine`}></use>
          </svg>
          <p className={styles.logoText}>LearnLingo</p>
        </div>
        <div className={styles.linkList}>
          <NavLink className={styles.link} to='/'>Home</NavLink>
          <NavLink className={styles.link} to='/teachers'>Teachers</NavLink>
        </div>
        {isLoggedIn ? ( <UserMenu /> ) : ( <AuthNav />)}
      </div>
    );
}

export default AppBar;