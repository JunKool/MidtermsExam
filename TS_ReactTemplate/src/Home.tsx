// Home.tsx
import React from 'react';
import MenuItem from './components/MenuItem';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

    const navigate = useNavigate();

  const handleUsersClick = () => {
    // Handle Users click logic
    navigate('/users');
  };

  const handleOffersClick = () => {
    // Handle Offers click logic
    navigate('/offers');
  };

  const handleMarketingClick = () => {
    // Handle Marketing click logic
    navigate('/marketing');
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MenuItem label="Users" onClick={handleUsersClick} />
        <MenuItem label="Offers" onClick={handleOffersClick} />
        <MenuItem label="Marketing" onClick={handleMarketingClick} />
      </div>
    </div>
  );
};

export default Home;
