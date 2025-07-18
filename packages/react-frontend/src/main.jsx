// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './MyApp.jsx';       // Your root component
import './main.css';               // Global styles (reset, fonts, base)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
