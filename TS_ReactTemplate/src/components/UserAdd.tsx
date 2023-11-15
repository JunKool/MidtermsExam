// UserAdd.tsx
import React, { useState } from 'react';
import { UserModel } from '../models/UserModel';
import { userServiceApi } from '../services/UserService';

const UserAdd: React.FC = () => {
  const initialUser: UserModel = {
    id: '',
    firstname: '',
    lastname: '',
    street: '',
    country: '',
    isMarketingSent: '',
    marketingDateSent: '',
    emailAddress: '',
  };

  const [newUser, setNewUser] = useState<UserModel>(initialUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    // Use the userServiceApi to create the new user
    userServiceApi.createUser(newUser)
      .then((response) => {
        console.log('User created successfully:', response.data);
        // Reset the form after successful creation
        setNewUser(initialUser);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        // Handle the error appropriately, e.g., show an error message to the user
      });
  };

  return (
    <div>
      <h2>Add User:</h2>
      <form>
      <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={newUser.firstname}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={newUser.lastname}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={newUser.street}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={newUser.country}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Is Marketing Sent:
          <input
            type="text"
            name="isMarketingSent"
            value={newUser.isMarketingSent}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Marketing Date Sent:
          <input
            type="text"
            name="marketingDateSent"
            value={newUser.marketingDateSent}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Email Address:
          <input
            type="text"
            name="emailAddress"
            value={newUser.emailAddress}
            onChange={handleInputChange}
          />
        </label><br/>
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserAdd;
