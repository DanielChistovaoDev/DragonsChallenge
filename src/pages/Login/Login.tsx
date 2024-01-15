import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

interface LoginProperties {
  onLogin: () => void
  isLoggedIn: boolean
}

const Login: React.FC<LoginProperties> = ({
  onLogin,
  isLoggedIn
}) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p> {JSON.stringify(isLoggedIn)}</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;