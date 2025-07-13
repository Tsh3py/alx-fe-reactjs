// src/App.jsx
import { useState } from 'react' // Keep if you plan to use state later, otherwise can remove
import './App.css' // Keep if you have global app styling

// NEW: Import the specific components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  // You can remove useState and the count button if not needed for this task's output
  const [count, setCount] = useState(0) // Keeping for now, but not used in the final render

  return (
    <>
      {/* Render the components in the specified order */}
      <Header />
      <MainContent />
      <Footer />

      {/* You can remove the original Vite + React starter content if it's not needed for the task
          For this task, the instruction implies replacing the content that was there. */}
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
