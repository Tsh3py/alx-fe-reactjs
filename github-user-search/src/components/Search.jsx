// src/components/Search.jsx
// This component handles the search input, state management, and display of results.

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    // State for the username input
    const [username, setUsername] = useState('');
    // State to store the user data returned from the API
    const [userData, setUserData] = useState(null);
    // State to track the loading status of the API call
    const [loading, setLoading] = useState(false);
    // State to handle any errors from the API call
    const [error, setError] = useState('');

    // Handle form submission
    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Check if the username is empty
        if (!username) {
            setError("Please enter a username.");
            setUserData(null);
            return;
        }

        // Reset states before a new search
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            // Call the API service to fetch user data
            const data = await fetchUserData(username);
            // Set the user data in state
            setUserData(data);
        } catch (err) {
            // Set the error message if the API call fails
            setError(err.message);
        } finally {
            // Always set loading to false after the API call is complete
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <form onSubmit={handleSearch} className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
                <div className="flex w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="mt-8 w-full max-w-md">
                {/* Conditional Rendering based on state */}
                {loading && (
                    <p className="text-center text-xl text-blue-600 font-medium">Loading...</p>
                )}

                {error && (
                    <p className="text-center text-xl text-red-600 font-medium">{error}</p>
                )}

                {userData && (
                    <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-6">
                        <img
                            src={userData.avatar_url}
                            alt={`${userData.login}'s avatar`}
                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                        />
                        <div className="flex flex-col space-y-1">
                            <h2 className="text-2xl font-bold text-gray-900">{userData.name || userData.login}</h2>
                            <p className="text-gray-600">
                                <a
                                    href={userData.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View GitHub Profile
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
