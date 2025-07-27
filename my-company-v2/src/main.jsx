// src/main.jsx
// Import React itself
import React from 'react';
// Import ReactDOM client for rendering React components to the DOM
import ReactDOM from 'react-dom/client';
// Import your main application component
import App from './App.jsx'; 


// Get the HTML element where your React app will "live"
// This element usually has an id of 'root' in index.html
const rootElement = document.getElementById('root');

// Create a React root and tell it to render your App component
// React.StrictMode is a development tool that helps find potential issues in your code.
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
