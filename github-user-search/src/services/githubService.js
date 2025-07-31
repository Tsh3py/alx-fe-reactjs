// src/services/githubService.js
// This file is responsible for all API calls to the GitHub API.

import axios from 'axios';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object>} A promise that resolves with the user data object.
 * @throws {Error} Throws an error if the user is not found or an API error occurs.
 */
export const fetchUserData = async (username) => {
    // Construct the URL for the GitHub API user endpoint
    const url = `https://api.github.com/users/${username}`;

    try {
        // Use axios to make a GET request to the API
        const response = await axios.get(url);
        // Return the data from the response
        return response.data;
    } catch (error) {
        // Log the error to the console for debugging
        console.error("Error fetching GitHub user data:", error);
        // Throw a new error to be handled by the calling component
        throw new Error("Looks like we can't find the user.");
    }
};