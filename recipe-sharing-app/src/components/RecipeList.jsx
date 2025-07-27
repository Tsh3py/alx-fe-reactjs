import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation to recipe details
import useRecipeStore from './recipeStore'; // Import the Zustand store

const RecipeList = () => {
  // Select filteredRecipes from the store. This array holds the recipes
  // that match the current search term.
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  
  // Also get the 'recipes' array from the store. This is used as a dependency
  // for the useEffect hook to ensure filtering is re-run when the main list of recipes changes.
  const recipes = useRecipeStore(state => state.recipes); 

  // The useEffect hook is used to trigger the filtering logic.
  // It runs once when the component mounts and whenever the 'recipes' array changes.
  useEffect(() => {
    // Call the filterRecipes action directly from the store's state.
    // This ensures that the 'filteredRecipes' array is always up-to-date
    // with the current 'recipes' and 'searchTerm'.
    useRecipeStore.getState().filterRecipes(); 
  }, [recipes]); // Dependency array: this effect will re-run if 'recipes' changes.

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Filtered Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        // Display a message if no recipes match the filter or if the list is empty
        <p style={{ textAlign: 'center', color: '#666' }}>No matching recipes found.</p>
      ) : (
        // Display the filtered recipes
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Use the map method to iterate over filteredRecipes and render each one */}
          {filteredRecipes.map(recipe => ( 
            <div key={recipe.id} style={{ 
                border: '1px solid #eee', 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              {/* Use the Link component to make the recipe title/card clickable,
                  navigating to the individual recipe details page. */}
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{recipe.title}</h3>
                <p style={{ margin: '0', fontSize: '0.9em', color: '#555' }}>{recipe.description}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;