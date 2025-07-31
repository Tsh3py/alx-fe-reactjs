 import React, { useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import useRecipeStore from './recipeStore';

    const RecommendationsList = () => {
      // Select recommendations and the generateRecommendations action from the store
      const recommendations = useRecipeStore(state => state.recommendations);
      const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
      const favorites = useRecipeStore(state => state.favorites); // Dependency for regeneration

      // Regenerate recommendations whenever favorites change
      useEffect(() => {
        generateRecommendations();
      }, [favorites, generateRecommendations]); // Re-run when favorites or generateRecommendations function changes

      return (
        <div style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#e6f7ff' }}>
          <h2 style={{ color: '#333', textAlign: 'center' }}>Recommended for You</h2>
          {recommendations.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666' }}>No recommendations yet. Try favoriting some recipes!</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {recommendations.map(recipe => (
                <div key={recipe.id} style={{
                    border: '1px solid #cceeff',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
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

    export default RecommendationsList;
    