import { NavLink} from 'react-router-dom';

import clsx from 'clsx';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../../redux/auth/authSlice';

export const activeLink = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {

  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  
  return (
    <div>
      <div className={styles.linkList}>
        <NavLink className={activeLink} to='/'>Home page</NavLink>
        {isLoggedIn && <NavLink className={activeLink} to='/contacts'>Contacts</NavLink>}
      </div>
    </div>
  );
}

export default Navigation;