import React from 'react';
import useRecipeStore from './recipeStore'; // Import the Zustand store

const SearchBar = () => {
  // Select the setSearchTerm action from the store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ 
          padding: '10px', 
          margin: '10px auto', 
          display: 'block', 
          width: 'calc(100% - 40px)', // Adjust width to fit container
          maxWidth: '600px',
          border: '1px solid #ccc', 
          borderRadius: '5px', 
          fontSize: '1em' 
      }}
    />
  );
};

export default SearchBar;