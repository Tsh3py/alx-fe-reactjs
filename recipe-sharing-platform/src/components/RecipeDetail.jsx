import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error('Error loading recipe:', err));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-gray-500">Loading recipe...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mb-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
  <ul className="list-disc list-inside text-gray-600 space-y-1">
    {recipe.ingredients.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>


      <div>
  <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
  <ol className="list-decimal list-inside text-gray-600 space-y-2">
    {recipe.instructions.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>
</div>

    </div>
  );
}

export default RecipeDetail;