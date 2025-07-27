// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList'; // Import RecipeList
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm
import './App.css'; // You might want to clear this file or remove this import if not using it

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#0056b3' }}>Recipe Sharing Application</h1>
      {/* Render the AddRecipeForm component */}
      <AddRecipeForm />
      {/* Render the RecipeList component */}
      <RecipeList />
    </div>
  );
}

export default App;
