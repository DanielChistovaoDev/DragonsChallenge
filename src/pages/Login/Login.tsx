import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';

const Login: React.FC = () => {
  const { 
    errorMessage,
    handleLogin,
  } = useAuth();

  const [
    credentials,
    setCredentials
  ] = useState({
    username: '',
    password: ''
  });

  const handleLoginClick = () => {   
    handleLogin(credentials.username, credentials.password);
  };


  return (
    <div className="login-background-container">
      <div className="login-container-wrapper">
        <h2 className="login-title">Login</h2>
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

        <ErrorLabel errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default Login;
