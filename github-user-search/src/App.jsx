// src/App.jsx
// This is the root component of the application.

import React from 'react';
import Search from './components/Search';
import './App.css'; // Assuming you have a default CSS file

function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="p-4 bg-white shadow-md">
                <nav className="container mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800">My GitHub App</h1>
                </nav>
            </header>
            <main className="container mx-auto p-4">
                <Search />
            </main>
        </div>
    );
}

export default App;
