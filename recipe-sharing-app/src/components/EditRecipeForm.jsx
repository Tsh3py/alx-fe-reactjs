import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore'; // Import the Zustand store

const EditRecipeForm = ({ recipe, onSave }) => {
  // Select the 'updateRecipe' action from the store
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Local state for the form inputs, initialized with the current recipe's data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // useEffect to update local state if the 'recipe' prop changes.
  // This is important if the same form component is reused for different recipes
  // without unmounting.
  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]); // Dependency array: re-run this effect if 'recipe' object changes

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    
    // Basic validation
    if (title.trim() === '' || description.trim() === '') {
        alert('Please enter both title and description.');
        return;
    }
    
    // Call the 'updateRecipe' action from the store with the updated data.
    // We spread the original 'recipe' to keep its ID and any other properties,
    // then override 'title' and 'description' with the new values from the form.
    updateRecipe({ ...recipe, title, description });
    
    // Call the 'onSave' callback prop, which typically hides the edit form
    // and shows the updated recipe details.
    onSave(); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px', 
        padding: '20px', 
        border: '1px solid #eee', 
        borderRadius: '8px', 
        backgroundColor: '#fdfdfd' 
    }}>
      <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '15px' }}>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        required // HTML5 validation
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '80px' }}
        required // HTML5 validation
      />
      <button 
        type="submit" 
        style={{ 
            padding: '10px 15px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        }}
      >
          Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;