import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList'; // Import FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList
import useRecipeStore from './components/recipeStore';

import './App.css'; 

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.' },
      { id: 2, title: 'Chicken Stir-Fry', description: 'Quick and healthy stir-fry with chicken and mixed vegetables.' },
      { id: 3, title: 'Vegetable Curry', description: 'Aromatic and spicy curry with various vegetables and coconut milk.' },
      { id: 4, title: 'Beef Tacos', description: 'Flavorful ground beef tacos with fresh toppings.' },
      { id: 5, title: 'Lentil Soup', description: 'Hearty and healthy lentil soup, perfect for a cold day.' },
      { id: 6, title: 'Chocolate Chip Cookies', description: 'Classic homemade chocolate chip cookies, soft and chewy.' },
    ]);
  }, [setRecipes]);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#0056b3' }}>Recipe Sharing Application</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                <RecipeList />
                <FavoritesList /> {/* Display FavoritesList on the main page */}
                <RecommendationsList /> {/* Display RecommendationsList on the main page */}
              </div>
            </>
          } />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;