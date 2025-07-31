import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  // Select favorite actions and the favorites array from the store
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  // Check if the current recipe is already a favorite
  const isFavorite = favorites.includes(recipe?.id);

  const [isEditing, setIsEditing] = React.useState(false);

  if (!recipe) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>Recipe not found!</div>;
  }

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <button onClick={() => navigate('/')} style={{ 
          backgroundColor: '#6c757d', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' 
      }}>
          Back to List
      </button>
      
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onSave={() => setIsEditing(false)} />
      ) : (
        <>
          <h1 style={{ color: '#0056b3', marginBottom: '10px' }}>{recipe.title}</h1>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>{recipe.description}</p>
          
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button onClick={() => setIsEditing(true)} style={{ 
                backgroundColor: '#ffc107', color: 'black', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' 
            }}>
                Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
            <button
              onClick={handleFavoriteToggle}
              style={{
                backgroundColor: isFavorite ? '#28a745' : '#007bff', // Green if favorited, blue if not
                color: 'white',
                padding: '8px 15px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
