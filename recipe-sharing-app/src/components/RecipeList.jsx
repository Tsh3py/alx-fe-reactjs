import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import useRecipeStore from './recipeStore'; // Import the Zustand store

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes); 

  useEffect(() => {
    // This ensures filteredRecipes is updated when the main recipes list changes.
    useRecipeStore.getState().filterRecipes(); 
  }, [recipes]); 

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Filtered Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No matching recipes found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} style={{ 
                border: '1px solid #eee', 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              {/* Use Link to navigate to the individual recipe details page */}
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