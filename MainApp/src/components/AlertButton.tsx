import React from 'react';

interface AlertButtonProps {
  alertMessage: string;
}

const AlertButton: React.FC<AlertButtonProps> = ({ alertMessage }) => {
  const handleButtonClick = () => {
    alert(alertMessage);
  };

  return (
    <button onClick={handleButtonClick}>Click Me</button>
  );
};

export default AlertButton;
