// src/components/Login.tsx
import React, { useState } from 'react';
import './Login.css';
import { useAuthContext } from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { isLoggedIn } = useAuthContext();

  const { handleLogin, handleLogout } = useAuth(isLoggedIn);

  const [
    credentials,
    setCredentials
  ] = useState({
    username: '',
    password: ''
  });

  useAuth(isLoggedIn);

  const handleLoginClick = () => {   
    handleLogin(credentials.username, credentials.password);
  };

  const handleLogoutClick = () => {
    handleLogout();
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="login-button" onClick={handleLoginClick}>
        Login
      </button>
      <button className="login-button" onClick={handleLogoutClick}>
        Logout
      </button>
      <p>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Login;
