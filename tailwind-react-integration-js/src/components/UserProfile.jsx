// src/components/UserProfile.jsx
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-white p-6 max-w-sm mx-auto my-10 rounded-lg shadow-xl text-center">
      <img
        className="rounded-full w-32 h-32 mx-auto mb-4"
        src="https://via.placeholder.com/128"
        alt="User profile"
      />
      <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
      <p className="text-gray-600 mt-2">
        Software Engineer at Example Co.
      </p>
      <a
        href="#"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserProfile;