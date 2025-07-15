import React from 'react';

function MainContent() {
  return (
    // Apply inline styles to the main tag
    <main style={{ 
        padding: '40px 20px', 
        backgroundColor: '#e6e6fa', // Light purple background
        textAlign: 'center', 
        fontSize: '1.2em',
        color: '#333'
    }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
