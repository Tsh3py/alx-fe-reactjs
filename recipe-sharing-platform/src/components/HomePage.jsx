import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Failed to load recipes:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;