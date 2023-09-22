import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import Container from './Container';
import useLocalStorage from 'UseLocalStorage/useLocalStorage';

export default function App() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const id = nanoid(5);
    const contact = {
      id,
      name,
      number,
    };

    //Checking if the contact is already added

    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkedContact
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [contact, ...contacts]);
  };

  //Getting and rendering already existing contacts

  const getVisibleContacts = () => {
    const contactsFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter)
    );
  };

  //Text input search of coincidences in input and contact list

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  //Deleting contact

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} changeFilter={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    </>
  );
}
 