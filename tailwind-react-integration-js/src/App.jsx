// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile'; // Correct import path for UserProfile

function App() {
  return (
    <div className="App">
      {/* You can add other global app elements here if needed */}
      <UserProfile />
    </div>
  );
}

export default App;