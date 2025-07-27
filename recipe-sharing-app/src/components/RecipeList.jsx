// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore'; // Import the Zustand store

const RecipeList = () => {
  // Select the 'recipes' state from the store
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', textAlign: 'center' }}>Recipe List</h2>
      {recipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No recipes yet. Add one!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recipes.map(recipe => (
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
