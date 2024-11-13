import React from 'react';

const AppBar = React.lazy(() => import('../AppBar/AppBar'));

import styles from './Layout.module.css'

const Layout = () => {
    return (
      <div className={styles.appBar}>
        <AppBar />
      </div>
    );
}

export default Layout;