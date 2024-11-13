
import { NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserData } from '../../redux/auth/authSlice';

import { activeLink } from '../Navigation/Navigation';


import styles from './UserMenu.module.css';


const UserMenu = () => {

    const dispatch = useDispatch();

    const userData = useSelector(selectUserData);

    

    const onLogout = () => {
      dispatch(logout());
    }

    return (
      <>
        <NavLink className={activeLink} to='/contacts'>Contacts</NavLink> 
        <div className={styles.containerLogout}>
          <span className={styles.userName}>User: {userData.name}</span> 
          <button className={styles.buttonLogout} onClick={onLogout} type='button'>Logout</button>
        </div>
      </>
    );
}

export default UserMenu;