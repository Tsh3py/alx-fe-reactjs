import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails component
import useRecipeStore from './components/recipeStore'; // Import the Zustand store

import './App.css'; // Keep or clear this file

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Initialize some dummy recipes when the component mounts.
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.' },
      { id: 2, title: 'Chicken Stir-Fry', description: 'Quick and healthy stir-fry with chicken and mixed vegetables.' },
      { id: 3, title: 'Vegetable Curry', description: 'Aromatic and spicy curry with various vegetables and coconut milk.' },
      { id: 4, title: 'Beef Tacos', description: 'Flavorful ground beef tacos with fresh toppings.' },
    ]);
  }, [setRecipes]);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#0056b3' }}>Recipe Sharing Application</h1>
        
        {/* Routes define which component to render based on the URL path */}
        <Routes>
          {/* Main page route: shows search, add form, and recipe list */}
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          {/* New route for individual recipe details, using a dynamic ID parameter */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
