// UserModel.tsx
import React from 'react';

interface UserModelProps {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    street: string;
    country: string;
    isMarketingSent: string;
    marketingDateSent: string;
    emailAddress: string;
  };
}

const UserModel: React.FC<UserModelProps> = ({ user }) => {
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>First Name: {user.firstname}</p>
      <p>Last Name: {user.lastname}</p>
      <p>Street: {user.street}</p>
      <p>Country: {user.country}</p>
      <p>Marketing Sent: {user.isMarketingSent}</p>
      <p>Marketing Date Sent: {user.marketingDateSent}</p>
      <p>Email Address: {user.emailAddress}</p>
    </div>
  );
};

export default UserModel;
