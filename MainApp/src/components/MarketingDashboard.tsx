// UserDashboard.tsx
import React, { useState } from 'react';
import MarketingList from './MarketingList';
import MarketingSearch from './MarketingSearch';
import MarketingAssign from './MarketingAssign';
import EmailLogViewer from './EmailLogViewer';

enum Menu {
  LIST = 'List',
  SEARCH = 'Search',
  ADD = 'Assign',
  EMAIL = 'Email',
}

const MarketingDashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(Menu.LIST);

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case Menu.LIST:
        return <MarketingList />;
      case Menu.SEARCH:
        return <MarketingSearch />;
      case Menu.ADD:
        return <MarketingAssign />;
      case Menu.EMAIL:
        return <EmailLogViewer />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Marketing Dashboard</h1>
      <div>
        <button onClick={() => setSelectedMenu(Menu.LIST)}>List</button>
        <button onClick={() => setSelectedMenu(Menu.SEARCH)}>Search</button>
        <button onClick={() => setSelectedMenu(Menu.ADD)}>Assign</button>
        <button onClick={() => setSelectedMenu(Menu.EMAIL)}>Email Log Viewer</button>
      </div>
      <div>
        {renderMenuContent()}
      </div>
    </div>
  );
};

export default MarketingDashboard;
