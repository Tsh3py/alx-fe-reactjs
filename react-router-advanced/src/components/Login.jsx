import { useAuth } from '../AuthContext';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      {!isAuthenticated && (
        <button onClick={login}>
          Log In
        </button>
      )}
      {isAuthenticated && <p>You are already logged in.</p>}
    </div>
  );
};

export default Login;