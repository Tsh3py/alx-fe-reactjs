 import React from 'react';

    function Home() {
      return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f8ff', minHeight: 'calc(100vh - 120px)' }}>
          <h1 style={{ color: '#2c3e50' }}>Welcome to Our Company</h1>
          <p style={{ color: '#34495e', fontSize: '1.1em' }}>We are dedicated to delivering excellence in all our services.</p>
          <img 
            src="https://placehold.co/400x200/ADD8E6/000000?text=Company+Homepage" 
            alt="Company Homepage Placeholder" 
            style={{ marginTop: '20px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      );
    }

    export default Home;
    