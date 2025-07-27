import React, { useEffect } from 'react'; // Import useEffect hook
import useRecipeStore from './recipeStore'; // Import the Zustand store

const RecipeList = () => {
  // Select filteredRecipes and filterRecipes action from the store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes); // Also get recipes to trigger initial filter

  // Use useEffect to trigger filtering when recipes change (e.g., on initial load or adding a recipe)
  // This ensures filteredRecipes is calculated whenever the source recipes array updates.
  useEffect(() => {
    useRecipeStore.getState().filterRecipes(); // Call filterRecipes action directly from the store's state
  }, [recipes]); // Dependency array: run effect when 'recipes' array changes

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Filtered Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No matching recipes found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredRecipes.map(recipe => ( // Use filteredRecipes here to display the filtered list
            <div key={recipe.id} style={{ 
                border: '1px solid #eee', 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{recipe.title}</h3>
              <p style={{ margin: '0', fontSize: '0.9em', color: '#555' }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
