import styles from './HomeUserMenu.module.css';

import { NavLink } from 'react-router-dom';

const HomeUserMenu = () => {
   return (
    <>
        <div className={styles.containerHero}>
            <div className={styles.containerHeroDescription}>
                <h1 className={styles.descriptionTitleHero}>Welcome aboard!</h1>
                <p className={styles.descriptionTextHero}>
                    Thank you for signing up! We are thrilled to have you join us. Now you have access to all the exciting features, exclusive content, and opportunities our platform has to offer. Whether you are here to learn, connect, or explore, we believe you will have a great time.
                    We are here to ensure you have the best experience possible.
                </p>
                <NavLink className={styles.registerHeroButton} to='/contacts'>Go to contacts</NavLink>
            </div>
        </div>
    </>
   );
}

export default HomeUserMenu;