import React, { useEffect } from 'react'; 
import RecipeList from './components/RecipeList'; 
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar'; 
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
    ]);
  }, [setRecipes]); 

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#0056b3' }}>Recipe Sharing Application</h1>
      {/* Render the SearchBar component to allow users to search for recipes */}
      <SearchBar />
      {/* Render the AddRecipeForm component for users to add new recipes */}
      <AddRecipeForm />
      {/* Render the RecipeList component to display the recipes (now filtered based on search) */}
      <RecipeList />
    </div>
  );
}

export default App;
