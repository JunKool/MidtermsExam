// UserSearch.tsx
import React, { useState , useEffect } from 'react';
import { userServiceApi } from '../services/UserService';
import Table from './Table';
import { UserModel } from '../models/UserModel';

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<UserModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    userServiceApi.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const handleSearch = () => {
    // Implement the search logic based on first name, last name, or country
    // For simplicity, let's perform a case-insensitive search on any matching field
    const results = users.filter(user =>
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'firstname', label: 'First Name' },
    { key: 'lastname', label: 'Last Name' },
    { key: 'street', label: 'Street' },
    { key: 'country', label: 'Country' },
    { key: 'isMarketingSent', label: 'Marketing Sent' },
    { key: 'marketingDateSent', label: 'Marketing Date Sent' },
    { key: 'emailAddress', label: 'Email Address' },
  ];

  return (
    <div>
      <h2>User Search:</h2>
      <form>
        <label>
          Search Term:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSearch}>Search</button>
      </form>
      <Table columns={tableColumns} data={searchResults} />
    </div>
  );
};

export default UserSearch;
