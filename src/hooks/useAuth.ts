import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authActions";
import { RootState } from "../redux/store/store";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../services/AuthService";
import { useState } from "react";

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const isAuthenticated = await loginService(username, password);
      if (!isAuthenticated) {
        throw new Error("Invalid user or password");
      }

      dispatch(login({ username, password }));

      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        console.error("Erro desconhecido durante o login:", error);
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return {
    errorMessage,
    isLoggedIn: auth.isLoggedIn,
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
