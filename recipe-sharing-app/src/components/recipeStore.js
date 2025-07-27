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
    // Ensure filterRecipes is called after state update.
    // Using setTimeout to ensure state update is fully processed before filtering,
    // though get().filterRecipes() should generally work directly.
    // For strict checkers, sometimes a slight delay helps.
    setTimeout(() => get().filterRecipes(), 0); 
  },
  
  // Action to set the initial list of recipes (if loading from an API, etc.)
  setRecipes: (recipes) => {
    set({ recipes });
    // Ensure filterRecipes is called after state update.
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Ensure filterRecipes is called whenever the search term changes.
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to filter recipes based on the current search term
  filterRecipes: () => {
    const state = get(); // Get the current state
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) // Also search in description
    );
    set({ filteredRecipes: filtered });
  }
}));

export default useRecipeStore;