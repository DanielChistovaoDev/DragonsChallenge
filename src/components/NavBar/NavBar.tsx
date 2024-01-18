import React from 'react';
import './NavBar.css';
import Button from '../Button/Button';

interface NavBarProps {
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLogout }) => {
  return (
    <div className="barra-superior">

        <Button
            label='Logout'
            onClick={onLogout}
        />
    </div>
  );
};

export default NavBar;
