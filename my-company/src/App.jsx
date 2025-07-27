// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components

// Import your page components from the components folder
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears on all pages, outside the Routes so it's always visible */}
      <Navbar /> 
      
      {/* Routes define which component to render based on the URL path */}
      <Routes>
        {/* Route for the Home page, at the root path "/" */}
        <Route path="/" element={<Home />} />
        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
        {/* Route for the Services page */}
        <Route path="/services" element={<Services />} />
        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
