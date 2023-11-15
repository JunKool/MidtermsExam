// UserList.tsx
import React, { useEffect, useState } from 'react';
import { userServiceApi } from '../services/UserService';
import Table from './Table';
import { UserModel } from '../models/UserModel';

const UserList: React.FC = () => {
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
      <h2>List of Users:</h2>
      <Table columns={tableColumns} data={users} />
    </div>
  );
};

export default UserList;
