import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import ContactForm from './components/ContactForm/ContactForm';
import SeacrhBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import profilesData from '../profiles.json';
import './App.css'

function App() {

  const [contacts, setContacts] = useState(() => {
    const stringyfiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringyfiedContacts) ?? profilesData;
    
    return parsedContacts;
  });
  const [filter, setFilter] = useState("");

  const filtretedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const onAddContact = (contactInfo) => {
    const addNewContact = {
      ...contactInfo,
      id: nanoid()
    }

    setContacts(prev => [...prev, addNewContact]);
  };

  const onDeleteContact = (contactId) => {
    const updetedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updetedContacts);
  };

  useEffect(() => {
    const stringyfiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringyfiedContacts);
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
          onAddContact={onAddContact}     
        />
        <SeacrhBox 
          value={filter}
          setFilter={setFilter}
        />
        <ContactList 
          onDeleteContact={onDeleteContact}
          contacts={contacts}
          filtretedContacts={filtretedContacts}
        />
      </div>
    </>
  )
}

export default App
