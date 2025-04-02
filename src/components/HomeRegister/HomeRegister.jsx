import styles from './HomeRegister.module.css'
import stylesContainer from '/src/App.module.css';
import womanImage from '../../img/woman.jpg';

const HomeRegister = () => {
   return (
      <>
         <div className={`${styles.containerHero} ${stylesContainer.container}`}>
            <div className={styles.textContainerHero}>
               <div className={styles.infoContainerHero}>
                  <p className={styles.bigTextHero}>Unlock your potential with the best  <span className={styles.word}>language</span> tutors</p>
                  <p className={styles.smallTextHero}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                  <button className={styles.buttonHero} type="button">Get started</button>
               </div>
               <img className={styles.imgHero} src={womanImage} alt="" width="568" height="530"/>
            </div>
            <div className={styles.textListContainerHero}>
               <ul className={styles.listHero}>
                  <li className={styles.listItemHero}>32,000 +
                     <p className={styles.listItemTextHero}>Experienced tutors</p>
                  </li>
                  <li className={styles.listItemHero}>300,000 +
                     <p className={styles.listItemTextHero}>5-star tutor reviews</p>
                  </li>
                  <li className={styles.listItemHero}>120 +
                     <p className={styles.listItemTextHero}>Subjects taught</p>
                  </li>
                  <li className={styles.listItemHero}>200 +
                     <p className={styles.listItemTextHero}>Tutor nationalities</p>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default HomeRegister;