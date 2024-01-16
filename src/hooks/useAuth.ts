import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { login } from '../services/AuthService';
import { User } from '../types/User';

const useAuth = (isLoggedIn: boolean) => {

  const { setAuthData } = useAuthContext();

  const navigate = useNavigate()

  const handleLogin = async(username: string, password: string) => {
    try {
      const user: User | null = await login(username, password);

      if (user) {
        setAuthData({
          isLoggedIn: true,
          username,
          password,
        });
  
        navigate('/home')
      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
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