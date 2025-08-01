// src/components/Search.jsx
// This component now handles an enhanced UI and advanced search capabilities.

import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
    // State for all form inputs
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    
    // State for search results and loading/error status
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    // Function to perform the search
    const performSearch = async (page) => {
        setLoading(true);
        setError('');

        try {
            // Call the new advanced search API function with all parameters
            const response = await fetchAdvancedUserData({ 
                username, 
                location, 
                minRepos,
                page
            });

            // Update state based on the response
            if (page === 1) {
                // If it's the first page, replace the results
                setSearchResults(response.items);
            } else {
                // If loading more, append to the existing results
                setSearchResults(prevResults => [...prevResults, ...response.items]);
            }
            
            // Check if there are more pages based on the total_count
            // GitHub API limits results to 1000, so we use that as a cap.
            // Also, check if the current page has a full set of results.
            setHasNextPage(response.items.length === 10);
            setCurrentPage(page);

        } catch (err) {
            setError(err.message);
            setSearchResults([]); // Clear old results on error
        } finally {
            setLoading(false);
        }
    };
    
    // Handle form submission
    const handleSearch = (event) => {
        event.preventDefault();
        // Check if username is provided as it's the minimum required field
        if (!username) {
            setError("Please enter a username to start the search.");
            setSearchResults([]);
            return;
        }
        performSearch(1); // Start a new search from page 1
    };
    
    // Handle "Load More" button click
    const handleLoadMore = () => {
        performSearch(currentPage + 1);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 font-sans">
            <form onSubmit={handleSearch} className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl flex flex-col space-y-4">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                    GitHub Advanced Search
                </h1>
                
                {/* Username Input */}
                <div>
                    <label htmlFor="username" className="text-gray-700 font-semibold mb-1 block">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="e.g., torvalds"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                </div>
                
                {/* Location Input */}
                <div>
                    <label htmlFor="location" className="text-gray-700 font-semibold mb-1 block">Location</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="e.g., San Francisco"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                </div>

                {/* Min Repositories Input */}
                <div>
                    <label htmlFor="minRepos" className="text-gray-700 font-semibold mb-1 block">Min Repositories</label>
                    <input
                        id="minRepos"
                        type="number"
                        placeholder="e.g., 10"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
                >
                    Search
                </button>
            </form>

            <div className="mt-10 w-full max-w-xl">
                {/* Conditional Rendering based on state */}
                {loading && (
                    <div className="flex justify-center items-center">
                        <div className="w-10 h-10 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                        <p className="ml-4 text-xl text-blue-600 font-medium">Searching...</p>
                    </div>
                )}

                {error && (
                    <p className="text-center text-xl text-red-600 font-medium bg-red-100 p-4 rounded-lg shadow-sm">{error}</p>
                )}

                {searchResults.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Search Results</h2>
                        {searchResults.map((user) => (
                            <a
                                key={user.id}
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                            >
                                <div className="flex items-center space-x-6">
                                    <img
                                        src={user.avatar_url}
                                        alt={`${user.login}'s avatar`}
                                        className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900">{user.login}</h3>
                                        <p className="text-gray-600 truncate">
                                            {/* Note: The search API doesn't return full profile data,
                                            so location and repos need a separate API call for accuracy.
                                            For this task, we will display a placeholder or a link to the profile.
                                            We'll add a link to the profile instead of displaying the values directly.*/}
                                            <span className="text-blue-500 hover:underline">View Full Profile</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                
                {/* "Load More" button for pagination */}
                {hasNextPage && !loading && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-md"
                        >
                            Load More
                        </button>
                    </div>
                )}
                
                {/* No results message */}
                {searchResults.length === 0 && !loading && !error && username && (
                    <p className="text-center text-gray-500 text-lg">
                        No users found matching your criteria.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Search;
