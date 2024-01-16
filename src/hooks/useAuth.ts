import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const useAuth = (isLoggedIn: boolean) => {

  const { setAuthData } = useAuthContext();

  const navigate = useNavigate()

  const handleLogin = (username: string, password: string) => {
    if (username.trim() !== '' && password.trim() !== '') {
      setAuthData({
        isLoggedIn: true,
        username,
        password,
      });

      navigate('/home')
    } else {
      console.error('Invalid username or password');
    }
  };
  
  const handleLogout = () => {
    setAuthData({
      isLoggedIn: false,
      username: '',
      password: '',
    });
  };

  return {
    handleLogin,
    handleLogout
  }
};

export default useAuth;