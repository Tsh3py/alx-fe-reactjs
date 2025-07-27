       // src/components/Navbar.jsx
    import React from 'react';
    import { Link } from 'react-router-dom'; // Import Link for navigation

    function Navbar() {
      return (
        <nav style={{ 
            backgroundColor: '#333', 
            padding: '15px 20px', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>About</Link>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Services</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Contact</Link>
        </nav>
      );
    }

    export default Navbar;
    