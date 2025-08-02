import React from 'react';

// UserCard component to display a single user's information
const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
      {/* User Avatar */}
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md mb-4"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/128x128/e2e8f0/4a5568?text=Avatar";
        }}
      />

      {/* User Login/Name */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
        {user.login}
      </h2>

      {/* User Location */}
      {user.location && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Location: {user.location}
        </p>
      )}

      {/* Link to GitHub Profile */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;