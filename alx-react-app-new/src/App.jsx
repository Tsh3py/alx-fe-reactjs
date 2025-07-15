import { useState } from 'react' // Keep useState if you're using it in App.jsx, otherwise can remove
import './App.css' 

// Import the specific components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; 
// NEW: Import the Counter component
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0) // This useState is from the original Vite template, not directly used for the task's Counter component output

  return (
    <>
      {/* Render the Header component */}
      <Header />
      
      {/* Render the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      {/* NEW: Render the Counter component */}
      <Counter />
      
      {/* Render the MainContent component */}
      <MainContent />
      
      {/* Render the Footer component */}
      <Footer />

      {/* You can keep or remove the original Vite + React starter content as per your preference. */}
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
