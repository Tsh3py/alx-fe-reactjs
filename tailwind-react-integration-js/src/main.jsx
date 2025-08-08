
import React from 'react';
import ReactDOM from 'react-dom/client';
// IMPORTANT: Explicitly specify .jsx extension for App component
import App from './App.jsx'; 
import './index.css'; 

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

