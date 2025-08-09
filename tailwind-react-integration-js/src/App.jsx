// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css'; // Assuming you still have some app-level CSS

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <UserProfile />
    </div>
  );
}

export default App;