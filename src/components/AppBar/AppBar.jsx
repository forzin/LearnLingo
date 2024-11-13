import React from "react";

import { useSelector } from "react-redux";
import { selectUserDataIsLoggedIn } from "../../redux/auth/authSlice";

const AuthNav = React.lazy(() => import('../AuthNav/AuthNav'));
const Navigation = React.lazy(() => import('../Navigation/Navigation'));
const UserMenu = React.lazy(() => import('../UserMenu/UserMenu'));


import styles from './AppBar.module.css'

const AppBar = () => {

  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

    return (
      <div className={styles.appBarContainer}>
        <Navigation />
        {isLoggedIn ? ( <UserMenu /> ) : ( <AuthNav />)}
      </div>
    );
}

export default AppBar;