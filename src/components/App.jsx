import { nanoid } from 'nanoid';

import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const getStorageContacts = localStorage.getItem('contacts');
  //   const storageContacts = JSON.parse(getStorageContacts);
  //   if (storageContacts) setContacts(storageContacts);
  // }, []);

  useEffect(() => {
    const saveContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', saveContacts);
  }, [contacts]);

  //  Додаємо обробник на форму при сабміті

  const handleSubmit = (name, number) => {
    const newContact = {
      number,
      name,
      id: nanoid(),
    };

    // Шукаємо чи є у масиві контаків ім'я, яке вводить користувач

    const newContactName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (newContactName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const handleFindName = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const searchName = () => {
    const allFilteredContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(allFilteredContacts)
    );
  };

  // Видалення контакту за id

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onClickSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFindName={handleFindName} valueFilter={filter} />
      {contacts.length > 0 && (
        <ContactList contacts={searchName()} onClickDelete={handleDelete} />
      )}
    </Wrapper>
  );
};
