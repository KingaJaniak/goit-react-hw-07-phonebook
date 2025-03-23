import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

const Filter = () => {
  const [query, setQuery] = useState('');  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);  
  };

  const handleSearch = () => {
    dispatch(setFilter(query));  
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={query}
        onChange={handleChange}  
      />
      <button onClick={handleSearch}>Search</button> 
    </div>
  );
};

export default Filter;
