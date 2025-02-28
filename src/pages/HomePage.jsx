import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserDataIsLoggedIn } from '../redux/auth/selectors.js';
import HomeUserMenu from '../components/HomeUserMenu/HomeUserMenu.jsx';

const HomeRegister = React.lazy(() => import('../components/HomeRegister/HomeRegister.jsx'));

const HomePage = () => {

   const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

   return (
      <>
         {isLoggedIn ? <HomeUserMenu/> : <HomeRegister/>}
      </>
   );
}

export default HomePage;