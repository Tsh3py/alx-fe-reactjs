import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import useRecipeStore from './recipeStore'; // Import the Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  // Select the 'deleteRecipe' action from the store
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate(); 

  const handleDelete = () => {
    // Show a confirmation dialog before deleting
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // Call the deleteRecipe action with the recipe's ID
      navigate('/'); // Navigate back to the home page (recipe list) after successful deletion
    }
  };

  return (
    <button onClick={handleDelete} style={{ 
        backgroundColor: '#dc3545', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' 
    }}>
        Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;