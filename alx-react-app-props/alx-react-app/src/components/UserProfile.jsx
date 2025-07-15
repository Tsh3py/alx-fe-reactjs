// src/components/UserProfile.jsx
import React from 'react';

// Define a functional component UserProfile that takes props
const UserProfile = (props) => {
  return (
    <div>
      {/* Display user's name */}
      <h2>{props.name}</h2>
      {/* Display user's age */}
      <p>Age: {props.age}</p>
      {/* Display user's bio */}
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
