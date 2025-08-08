import React from 'react';
// import './App.css'; // Removed the import as App.css is not found.

// This is the combined App component, which now contains the UserProfile logic.
function App() {
  return (
    // The main container styled with Tailwind CSS
    <div className="container bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* The image component with Tailwind styling */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto mb-4"
      />
      
      {/* The heading with Tailwind styling */}
      <h1 className="text-xl text-blue-800 my-4">John Dora</h1>
      
      {/* The paragraph with Tailwind styling */}
      <p className="text-gray-600 text-base">Developer at ALX Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default App;
