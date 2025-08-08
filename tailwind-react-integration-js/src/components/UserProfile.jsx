import React from 'react'; // React is implicitly imported in newer React versions, but good practice to include
import './UserProfile.css'; // Assuming you have a CSS file for UserProfile styles
function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto mb-4" 
      />
      <h1 className="text-xl text-blue-800 my-4">John Dora</h1>
      <p className="text-gray-600 text-base">Developer at ALX Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
