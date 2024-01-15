import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate, 
  Routes,
  useNavigate,
  useLocation
} from 'react-router-dom';

import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Unauthorized from './pages/Unauthorized/Unauthorized';

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const location = useLocation();

    return isLoggedIn ? (
      React.cloneElement(element)
    ) : (
      <Navigate to="/unauthorized" replace state={{ from: location }} />
    );
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login"
          element={
            <Login 
              onLogin={handleLogin}
              isLoggedIn={isLoggedIn}
            />}
          />
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
