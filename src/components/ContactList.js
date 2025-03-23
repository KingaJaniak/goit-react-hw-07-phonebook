import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAsync, removeContactAsync } from '../redux/contactsSlice'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.contacts); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContactsAsync()); 
    }
  }, [status, dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(removeContactAsync(id)); 
  };

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
        {items.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
