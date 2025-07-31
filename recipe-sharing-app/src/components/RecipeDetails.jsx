import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate hooks
import useRecipeStore from './recipeStore'; // Import the Zustand store
import EditRecipeForm from './EditRecipeForm'; // Import the EditRecipeForm component
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the DeleteRecipeButton component

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Extract the recipeId from the URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate (e.g., back to list after delete)

  // Find the recipe in the store's 'recipes' array that matches the recipeId from the URL.
  // We use parseInt(recipeId) because URL parameters are strings, and recipe IDs are numbers.
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  // State to control the visibility of the EditRecipeForm.
  // When true, the edit form is shown; otherwise, the recipe details are shown.
  const [isEditing, setIsEditing] = React.useState(false);

  // If no recipe is found with the given ID, display a "not found" message.
  if (!recipe) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>Recipe not found!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      {/* Button to navigate back to the main recipe list */}
      <button onClick={() => navigate('/')} style={{ 
          backgroundColor: '#6c757d', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' 
      }}>
          Back to List
      </button>
      
      {/* Conditionally render the EditRecipeForm or the recipe details */}
      {isEditing ? (
        // If isEditing is true, show the EditRecipeForm.
        // Pass the current recipe and a callback function to hide the form after saving.
        <EditRecipeForm recipe={recipe} onSave={() => setIsEditing(false)} />
      ) : (
        // If not editing, show the recipe's title and description.
        <>
          <h1 style={{ color: '#0056b3', marginBottom: '10px' }}>{recipe.title}</h1>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>{recipe.description}</p>
          
          {/* Buttons for editing and deleting the recipe */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            {/* Button to toggle the edit form visibility */}
            <button onClick={() => setIsEditing(true)} style={{ 
                backgroundColor: '#ffc107', color: 'black', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' 
            }}>
                Edit Recipe
            </button>
            {/* DeleteRecipeButton component, passing the recipe's ID */}
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
