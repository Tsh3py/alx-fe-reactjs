import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({ // Added 'get' parameter to access current state
  recipes: [],
  searchTerm: '', // New state for the search term
  filteredRecipes: [], // New state for filtered recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    }));
    get().filterRecipes(); // Call filterRecipes after adding a new recipe
  },
  
  // Action to set the initial list of recipes (if loading from an API, etc.)
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Call filterRecipes after setting initial recipes
  },

  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Call filterRecipes whenever the search term changes
  },

  // Action to filter recipes based on the current search term
  filterRecipes: () => {
    const state = get(); // Get the current state
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
}));

export default useRecipeStore;
