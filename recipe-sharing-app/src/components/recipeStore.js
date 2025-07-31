import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // New state: array to store IDs of favorite recipes
  recommendations: [], // New state: array to store recommended recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set(state => ({
      recipes: [...state.recipes, newRecipe]
    }));
    setTimeout(() => get().filterRecipes(), 0);
    // No need to regenerate recommendations immediately here, as new recipe might not be a favorite yet.
  },

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    setTimeout(() => get().filterRecipes(), 0);
    // Regenerate recommendations if a favorite recipe was updated (optional, but good for real apps)
    setTimeout(() => get().generateRecommendations(), 0);
  },

  // Action to delete a recipe by its ID
  deleteRecipe: (recipeId) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
      // Also remove from favorites if the deleted recipe was a favorite
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    setTimeout(() => get().filterRecipes(), 0);
    setTimeout(() => get().generateRecommendations(), 0); // Regenerate recommendations after deletion
  },
  
  // Action to set the initial list of recipes
  setRecipes: (recipes) => {
    set({ recipes });
    setTimeout(() => get().filterRecipes(), 0);
    setTimeout(() => get().generateRecommendations(), 0); // Generate recommendations after initial recipes are set
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
  },

  // New Action: Add a recipe to favorites
  addFavorite: (recipeId) => {
    set(state => {
      // Prevent adding duplicates
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state; // No change if already favorited
    });
    setTimeout(() => get().generateRecommendations(), 0); // Regenerate recommendations after adding favorite
  },

  // New Action: Remove a recipe from favorites
  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    setTimeout(() => get().generateRecommendations(), 0); // Regenerate recommendations after removing favorite
  },

  // New Action: Generate recommendations based on favorites (mock implementation)
  generateRecommendations: () => {
    set(state => {
      const allRecipes = state.recipes;
      const favoriteRecipes = allRecipes.filter(recipe => state.favorites.includes(recipe.id));
      const nonFavoriteRecipes = allRecipes.filter(recipe => !state.favorites.includes(recipe.id));

      let recommended = [];

      if (favoriteRecipes.length > 0) {
        // Simple recommendation: If user has favorites, recommend other non-favorite recipes randomly
        // or based on some shared characteristics (e.g., categories, ingredients - not implemented here).
        // For this mock, we'll just pick some random non-favorites.
        const numRecommendations = Math.min(3, nonFavoriteRecipes.length); // Max 3 recommendations
        const shuffledNonFavorites = [...nonFavoriteRecipes].sort(() => 0.5 - Math.random());
        recommended = shuffledNonFavorites.slice(0, numRecommendations);
      } else {
        // If no favorites, recommend top 3 random recipes from all recipes
        const shuffledAllRecipes = [...allRecipes].sort(() => 0.5 - Math.random());
        recommended = shuffledAllRecipes.slice(0, Math.min(3, allRecipes.length));
      }
      
      return { recommendations: recommended };
    });
  }
}));

export default useRecipeStore;