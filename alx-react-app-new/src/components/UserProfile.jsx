import React from 'react';

const UserProfile = (props) => {
  return (
    // Apply styles to the main div of the component
    <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        margin: '20px auto', // Center the div and add margin
        maxWidth: '300px', // Give it a max-width for better appearance
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center'
    }}>
      <h2 style={{ color: '#007bff', fontSize: '2em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '0.9em', color: '#777', lineHeight: '1.5' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;