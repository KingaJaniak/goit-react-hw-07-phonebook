import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAsync, removeContactAsync } from '../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);  // Pobieramy wartość filtra z Redux

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContactsAsync());  // Ładujemy kontakty przy pierwszym renderze
    }
  }, [status, dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(removeContactAsync(id));  // Usuwamy kontakt
  };

  // Filtrowanie kontaktów na podstawie wprowadzonego zapytania w Redux
  const filteredContacts = items.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||  // Filtruj po nazwie
    contact.phone.includes(filter)  // Filtruj po numerze telefonu
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}
              <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No contacts found.</li>  
)}
      </ul>
    </div>
  );
};

export default ContactList;
