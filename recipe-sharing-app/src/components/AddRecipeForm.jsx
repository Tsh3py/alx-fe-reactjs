// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const AddRecipeForm = () => {
  // Select the 'addRecipe' action from the store
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
        alert('Please enter both title and description.');
        return;
    }
    // Call the addRecipe action from the store
    addRecipe({ id: Date.now(), title, description }); // Generate a unique ID
    setTitle(''); // Clear form fields after submission
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px', 
        maxWidth: '400px', 
        margin: '20px auto', 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff'
    }}>
      <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '15px' }}>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '80px' }}
        required
      />
      <button 
        type="submit" 
        style={{ 
            padding: '10px 15px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        }}
      >
          Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
