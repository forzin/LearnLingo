import React from 'react';
const HomeRegister = React.lazy(() => import('../components/HomeRegister/HomeRegister.jsx'));

const HomePage = () => {

   return (
      <>
         <HomeRegister/>
      </>
   );
}

export default HomePage;