// MarketingAssign.tsx
import React, { useState, useEffect } from 'react';
import { userServiceApi } from '../services/UserService'; // Import user service
import { offerServiceApi } from '../services/OfferService'; // Import offer service
import { marketingServiceApi } from '../services/MarketingService';
import UserModel from '../models/UserModel';
import { OfferModel } from '../models/OfferModel';

const MarketingAssign: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
  const [availableUsers, setAvailableUsers] = useState<UserModel[]>([]);
  const [availableOffers, setAvailableOffers] = useState<OfferModel[]>([]);

  // Fetch available users
  useEffect(() => {
    userServiceApi.getAllUsers()
      .then((response) => {
        setAvailableUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Fetch available offers
  useEffect(() => {
    offerServiceApi.getAllOffers()
      .then((response) => {
        setAvailableOffers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching offers:', error);
      });
  }, []);

  const handleAssign = () => {
    // Call the marketingServiceApi to assign offers to the selected user
    marketingServiceApi.assignUserOffers(selectedUser, selectedOffers);
    // Reset the form
    setSelectedUser('');
    setSelectedOffers([]);
  };

  return (
    <div>
      <h2>Marketing Assign:</h2>
      <form>
        <label>
          Select User:
          <input
            type="text"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            list="usersList" // Connect input to the datalist
          />
          {/* Datalist for typeahead based on available users */}
          <datalist id="usersList">
            {availableUsers.map((user) => (
              <option key={user.id} value={user.id} >
                {`${user.firstname} ${user.lastname}`} 
              </option>
            ))}
          </datalist>
        </label>
        <label>
          Select Offers:
          <select
            multiple
            value={selectedOffers}
            onChange={(e) => setSelectedOffers(Array.from(e.target.selectedOptions, (option) => option.value))}
          >
            {availableOffers.map((offer) => (
              <option key={offer.id} value={`${offer.name} ${offer.value}`}>
                {`${offer.name} ${offer.value}`}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleAssign}>
          Assign Offers
        </button>
      </form>
    </div>
  );
};

export default MarketingAssign;
