// src/services/githubService.js
// This file is responsible for all API calls to the GitHub API, now including advanced search.

import axios from 'axios';

/**
 * Fetches user data from the GitHub API using advanced search criteria.
 * This function uses the /search/users endpoint.
 * @param {object} params An object containing search parameters.
 * @param {string} params.username The GitHub username to search for.
 * @param {string} [params.location] Optional location to filter by.
 * @param {number} [params.minRepos] Optional minimum number of repositories.
 * @param {number} [params.page=1] The page number for pagination.
 * @returns {Promise<object>} A promise that resolves with the search results object.
 * @throws {Error} Throws an error if the search fails.
 */
export const fetchAdvancedUserData = async (params) => {
    // Destructure parameters with default values
    const { username, location, minRepos, page = 1 } = params;
    
    // Construct the base query string for the GitHub Search API
    let query = username;
    if (location) {
        query += `+location:${location}`;
    }
    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    // Construct the full URL with query parameters and pagination
    const url = `https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`;

    try {
        // Use axios to make a GET request to the advanced search API
        const response = await axios.get(url);
        // The search API returns an object with a 'items' array.
        // We'll return the whole response for pagination info.
        return response.data;
    } catch (error) {
        // Log the error to the console for debugging
        console.error("Error fetching GitHub advanced search data:", error);
        // Throw a new error to be handled by the calling component
        throw new Error("Could not perform advanced search. Please try again.");
    }
};
 