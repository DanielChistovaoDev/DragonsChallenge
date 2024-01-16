// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  isLoggedIn: boolean;
  username: string;
  password: string;
  setAuthData: React.Dispatch<React.SetStateAction<{
    isLoggedIn: boolean;
    username: string;
    password: string;
  }>>
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoggedIn: false,
    username: '',
    password: '',
  });


  return (
    <AuthContext.Provider
    value={{
      ...authData,
      setAuthData,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
