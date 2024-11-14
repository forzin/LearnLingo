import React from 'react';

const AppBar = React.lazy(() => import('../AppBar/AppBar'));

import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
      <div className={styles.appBar}>
        {<AppBar />}
        {children} 
      </div>
    );
}

export default Layout;