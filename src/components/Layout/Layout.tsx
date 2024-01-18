import React from "react";
import NavBar from "../NavBar/NavBar";
import useAuth from "../../hooks/useAuth";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { handleLogout } = useAuth();

  return (
    <div>
      <NavBar onLogout={handleLogout} />
      {children}
    </div>
  );
};

export default Layout;
