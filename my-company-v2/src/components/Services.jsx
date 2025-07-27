// src/components/Services.jsx
    import React from 'react';

    function Services() {
      return (
        <div style={{ padding: '20px', backgroundColor: '#f5fffa', minHeight: 'calc(100vh - 120px)' }}>
          <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ background: '#dcdcdc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>Technology Consulting</li>
            <li style={{ background: '#dcdcdc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>Market Analysis</li>
            <li style={{ background: '#dcdcdc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>Product Development</li>
            <li style={{ background: '#dcdcdc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>Digital Marketing</li>
            <li style={{ background: '#dcdcdc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>Cloud Solutions</li>
          </ul>
        </div>
      );
    }

    export default Services;