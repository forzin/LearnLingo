import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

import styles from './UserMenu.module.css';


const UserMenu = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
      dispatch(logout());
    }

    return (
      <>
        <div className={styles.containerLogout}>
          <button className={styles.buttonLogout} onClick={onLogout} type='button'>Logout</button>
        </div>
      </>
    );
}

export default UserMenu;