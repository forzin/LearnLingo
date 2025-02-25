import styles from './Home.module.css'
import icon from '../../img/icons/icons.svg';

import { NavLink } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <div className={styles.containerHero}>
            <div className={styles.containerHeroDescription}>
               <h1 className={styles.descriptionTitleHero}>Phonebook</h1>
               <p className={styles.descriptionTextHero}>
                  This is your personal phone book, thoughtfully designed to keep your contacts organized, easily accessible, and always within reach.
                  With just a few taps, you can store, manage, and find the details of the people who matter most to you — whether it's family, friends, or professional connections.
                  To unlock all features and enjoy the full potential of the app, please take a moment to register.
               </p>
               <NavLink className={styles.registerHeroButton} to='/register'>Register</NavLink>
            </div>
            <div className={styles.containerHeroBenefits}>
               <h1 className={styles.descriptionTitleHero}>Benefits</h1>
               <ul className={styles.benefitsListHero}>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-heart`}></use>
                     </svg>
                     Completely Free to Use
                  </li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-phone`}></use>
                     </svg>
                     Easy Contact Management</li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-shield`}></use>
                     </svg>
                     Secure Cloud Backup</li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-globe`}></use>
                     </svg>
                     Accessible Anytime, Anywhere</li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-window`}></use>
                     </svg>
                     User-Friendly Interface</li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-search`}></use>
                     </svg>
                     Fast Search and Filtering</li>
                  <li className={styles.benefitsItemHero}>
                     <svg
                        className={styles.svg}
                        width="23"
                        height="20"
                     >
                        <use href={`${icon}#icon-cloud`}></use>
                     </svg>
                     Privacy and Data Protection
                  </li>
               </ul>
            </div>
      </div>
    </>
   );
}

export default Home;