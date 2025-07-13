// src/App.jsx
import { useState } from 'react'
import './App.css'

// Import the specific components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// NEW: Import the UserProfile component
import UserProfile from './components/UserProfile'; 

function App() {
  const [count, setCount] = useState(0) // Keeping useState, though not directly used for this task's output

  return (
    <>
      {/* Render the Header component */}
      <Header />
      
      {/* NEW: Render the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      {/* Render the MainContent component */}
      <MainContent />
      
      {/* Render the Footer component */}
      <Footer />

      {/* You can keep or remove the original Vite + React starter content as per your preference.
          For this task, the focus is on the new components. */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
