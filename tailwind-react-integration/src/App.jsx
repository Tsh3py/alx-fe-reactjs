import React from 'react';
// The import for './App.css' has been removed to fix the compilation error.
// All styling is now handled by Tailwind CSS classes directly in the JSX.

function App() {
  return (
    // The main container styled with Tailwind CSS utility classes
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* The image component styled with Tailwind CSS */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto mb-4" 
      />
      
      {/* The heading styled with Tailwind CSS */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      
      {/* The paragraph styled with Tailwind CSS */}
      <p className="text-gray-600 text-base">Developer at ALX. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default App;
