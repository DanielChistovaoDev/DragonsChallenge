import React from 'react';
import './ErrorLabel.css';

interface ErrorLabelProps {
  errorMessage: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ errorMessage }) => {
  return (
    <div className="error-label">
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ErrorLabel;