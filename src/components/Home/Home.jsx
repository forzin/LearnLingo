import styles from './Home.module.css'

const Home = () => {
   return (
      <>
       <div className={styles.containerHero}>
          <h1 className={styles.titleHero}>Phonebook</h1>
          <p className={styles.textHero}>Hello! This is a phone book that is designed to store your contacts, if you want to start using you need to register.</p>
       </div>
    </>
   );
}

export default Home;