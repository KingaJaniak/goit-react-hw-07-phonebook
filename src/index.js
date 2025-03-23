import React from 'react';
import ReactDOM from 'react-dom/client';  // Używamy 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Tworzymy root za pomocą createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
