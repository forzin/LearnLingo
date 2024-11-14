import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserData } from '../../redux/auth/authSlice';

import styles from './UserMenu.module.css';


const UserMenu = () => {

    const dispatch = useDispatch();

    const userData = useSelector(selectUserData);

    const onLogout = () => {
      dispatch(logout());
    }

    return (
      <>
        <div className={styles.containerLogout}>
          <span className={styles.userName}>User: {userData.name}</span> 
          <button className={styles.buttonLogout} onClick={onLogout} type='button'>Logout</button>
        </div>
      </>
    );
}

export default UserMenu;