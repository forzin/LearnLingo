import React from 'react';

const Home = React.lazy(() => import('../components/Home/Home'));

const HomePage = () => {
   return (
      <>
         <Home />
      </>
   );
}

export default HomePage;