import React from 'react';

const AppBar = React.lazy(() => import('../AppBar/AppBar'));

const Layout = ({ children }) => {
    return (
      <div>
        {<AppBar />}
        {children} 
      </div>
    );
}

export default Layout;