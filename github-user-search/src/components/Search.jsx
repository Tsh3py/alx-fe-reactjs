import React, { useState } from 'react';
import UserCard from './UserCard'; // Assuming you have a UserCard component

// Main Search component
const Search = () => {
  // State for the user's search query
  const [query, setQuery] = useState('');
  // State to hold the fetched user data (now an array)
  const [users, setUsers] = useState([]);
  // State for handling loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for handling potential errors
  const [error, setError] = useState(null);

  /**
   * Fetches user data from the GitHub search API.
   * @param {string} username The GitHub username to search for.
   */
  const fetchUserData = async (username) => {
    setIsLoading(true);
    setError(null);
    setUsers([]);

    // Exponential backoff retry logic for API calls
    for (let i = 0; i < 3; i++) {
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`);
        if (response.ok) {
          const data = await response.json();
          // The API returns an object with a 'items' array
          setUsers(data.items);
          setIsLoading(false);
          return; // Exit the loop on success
        } else if (response.status === 404) {
          setError(`User '${username}' not found.`);
        } else {
          setError(`Error: Could not fetch data for '${username}'.`);
        }
        setIsLoading(false);
        return; // Exit the loop on error
      } catch (e) {
        console.error(`Attempt ${i + 1} failed:`, e);
        if (i < 2) {
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        } else {
          setError('Failed to connect to the GitHub API after multiple retries.');
          setIsLoading(false);
        }
      }
    }
  };

  /**
   * Handles the form submission.
   * @param {object} event The form submit event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      fetchUserData(query);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {/* Search Bar */}
      <div className="w-full max-w-xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          GitHub User Search
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter GitHub username..."
            className="flex-grow p-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </div>

      {/* Results Display */}
      <div className="mt-8 w-full max-w-xl">
        {isLoading && (
          <div className="p-8 text-center text-2xl font-semibold text-gray-600 dark:text-gray-400">
            Loading...
          </div>
        )}
        {error && (
          <div className="p-8 text-center text-xl font-semibold text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-xl border border-red-500">
            {error}
          </div>
        )}
        {users.length > 0 && !isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
 