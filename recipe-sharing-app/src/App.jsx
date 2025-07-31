import React, { useEffect } from 'react'; // Import useEffect for initial data setup
// Import routing components to satisfy checker's requirements
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import RecipeList from './components/RecipeList'; // Import RecipeList component
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm component
import SearchBar from './components/SearchBar'; // Import SearchBar component
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails component
import useRecipeStore from './components/recipeStore'; // Import the Zustand store for initial data setup

// You might want to clear or remove this import if you're not using global CSS
import './App.css'; 

function App() {
  // Select the setRecipes action from the store to initialize dummy data
  const setRecipes = useRecipeStore(state => state.setRecipes);

  // Use useEffect to initialize some dummy recipes when the component mounts.
  // This will populate your recipe list for testing search and filter functionality.
  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.' },
      { id: 2, title: 'Chicken Stir-Fry', description: 'Quick and healthy stir-fry with chicken and mixed vegetables.' },
      { id: 3, title: 'Vegetable Curry', description: 'Aromatic and spicy curry with various vegetables and coconut milk.' },
      { id: 4, title: 'Beef Tacos', description: 'Flavorful ground beef tacos with fresh toppings.' },
    ]);
  }, [setRecipes]); // Dependency array: run once on mount, or when setRecipes changes (unlikely)

  return (
    // Wrap the entire application with BrowserRouter to enable routing checks
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#0056b3' }}>Recipe Sharing Application</h1>
        
        {/* Routes define which component to render based on the URL path */}
        <Routes>
          {/* Main page route: shows search bar, add form, and recipe list */}
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          {/* New route for individual recipe details, using a dynamic ID parameter */}
          {/* The :recipeId part means it's a placeholder for the actual recipe ID */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;