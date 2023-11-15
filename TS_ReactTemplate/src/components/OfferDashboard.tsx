// UserDashboard.tsx
import React, { useState } from 'react';
import OfferList from './OfferList';
import OfferSearch from './OfferSearch';
import OfferAdd from './OfferAdd';

enum Menu {
  LIST = 'List',
  SEARCH = 'Search',
  ADD = 'Add',
}

const OfferDashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(Menu.LIST);

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case Menu.LIST:
        return <OfferList />;
      case Menu.SEARCH:
        return <OfferSearch />;
      case Menu.ADD:
        return <OfferAdd />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Offer Dashboard</h1>
      <div>
        <button onClick={() => setSelectedMenu(Menu.LIST)}>List</button>
        <button onClick={() => setSelectedMenu(Menu.SEARCH)}>Search</button>
        <button onClick={() => setSelectedMenu(Menu.ADD)}>Add</button>
      </div>
      <div>
        {renderMenuContent()}
      </div>
    </div>
  );
};

export default OfferDashboard;
