 import React from 'react';
    import { Link } from 'react-router-dom';
    import useRecipeStore from './recipeStore';

    const FavoritesList = () => {
      // Get the list of favorite recipe IDs and the full recipes array from the store.
      // Then, map the favorite IDs back to their full recipe objects.
      const favorites = useRecipeStore(state =>
        state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
      ).filter(Boolean); // Filter out any undefined recipes (if an ID doesn't match)

      // Select the removeFavorite action from the store
      const removeFavorite = useRecipeStore(state => state.removeFavorite);

      return (
        <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ color: '#333', textAlign: 'center' }}>My Favorites</h2>
          {favorites.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666' }}>You haven't favorited any recipes yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {favorites.map(recipe => (
                <div key={recipe.id} style={{
                    border: '1px solid #eee',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                  <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{recipe.title}</h3>
                    <p style={{ margin: '0', fontSize: '0.9em', color: '#555' }}>{recipe.description}</p>
                  </Link>
                  <button
                    onClick={() => removeFavorite(recipe.id)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.8em'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };

    export default FavoritesList;