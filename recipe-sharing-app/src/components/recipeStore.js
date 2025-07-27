import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set(state => ({
      recipes: [...state.recipes, newRecipe]
    }));
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to delete a recipe by its ID
  deleteRecipe: (recipeId) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    }));
    setTimeout(() => get().filterRecipes(), 0);
  },
  
  // Action to set the initial list of recipes
  setRecipes: (recipes) => {
    set({ recipes });
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    setTimeout(() => get().filterRecipes(), 0);
  },

  // Action to filter recipes based on the current search term
  filterRecipes: () => {
    const state = get();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
}));

export default useRecipeStore;