import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/authActions'; 
import { RootState } from '../redux/store/store';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      dispatch(login({username, password}));

      navigate('/home');
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());

    navigate('/');
  };

  return {
    isLoggedIn: auth.isLoggedIn,
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
