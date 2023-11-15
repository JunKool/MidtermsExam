// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import OfferDashboard from './components/OfferDashboard';
import MarketingDashboard from './components/MarketingDashboard';
import Home from './Home';

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" Component={UserDashboard} />
        <Route path="/offers" Component={OfferDashboard} />
        <Route path="/marketing" Component={MarketingDashboard} />
        {/* Add more routes as needed */}
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
