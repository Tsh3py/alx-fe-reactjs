import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import BlogPosts from './components/BlogPosts';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute component
import Login from './components/Login';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Blog Posts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<BlogPosts />} />
          <Route path="/posts/:postId" element={<BlogPosts />} />
          
          {/* Use ProtectedRoute to protect the Profile route */}
          <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;