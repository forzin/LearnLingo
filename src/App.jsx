import ContactForm from './components/ContactForm/ContactForm';
import SeacrhBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SeacrhBox />
        <ContactList />
      </div>
    </>
  )
}

export default App
