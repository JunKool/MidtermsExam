// UserDashboard.tsx
import React, { useState } from 'react';
import UserList from './UserList';
import UserSearch from './UserSearch';
import UserAdd from './UserAdd';

enum Menu {
  LIST = 'List',
  SEARCH = 'Search',
  ADD = 'Add',
}

const UserDashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(Menu.LIST);

  const renderMenuContent = () => {
    switch (selectedMenu) {
      case Menu.LIST:
        return <UserList />;
      case Menu.SEARCH:
        return <UserSearch />;
      case Menu.ADD:
        return <UserAdd />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
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

export default UserDashboard;
