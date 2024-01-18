import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
