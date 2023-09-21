import { useState } from 'react';
 

import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import initialState from '../../src/contacts.json'

import styles from './App.module.css'


export const App = () => {

  const [contacts, setContacts] = useState(initialState);
  const [filter, setFilter] = useState('');
  // console.log(contacts);

  

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };


  const handleAddContact = (newContact) => setContacts(prev => [newContact, ...prev]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  
  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
        
            <h2 className="header__text" >Phonebook</h2>
            <ContactForm onSubmit={handleAddContact} />
            <h2 className="header__text" >Contacts</h2>
            <Filter value={filter}  onChange={changeFilter} />
            <ContactList
            contacts={filteredContacts}
            id={contacts.id}
             onDeleteContact={deleteContact}
             />         
    </div>
  );
};
 