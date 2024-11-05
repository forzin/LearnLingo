import ContactForm from './components/ContactForm/ContactForm';
import SeacrhBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contact/contactsOps';

function App() {

  const dispatch = useDispatch();
  
  //const isLoading = useSelector((state) => state.contactBook.isLoading);
  //const error = useSelector((state) => state.contactBook.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
