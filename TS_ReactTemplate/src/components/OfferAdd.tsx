// OfferAdd.tsx
import React, { useState } from 'react';
import { OfferModel } from '../models/OfferModel';
import { offerServiceApi } from '../services/OfferService';

const OfferAdd: React.FC = () => {
  const initialOffer: OfferModel = {
    id: '',
    name: '',
    code: '',
    value: '',
  };

  const [newOffer, setNewOffer] = useState<OfferModel>(initialOffer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  const handleAddOffer = () => {
    // Use the offerServiceApi to create the new offer
    offerServiceApi.createOffer(newOffer)
      .then((response) => {
        console.log('Offer created successfully:', response.data);
        // Reset the form after successful creation
        setNewOffer(initialOffer);
      })
      .catch((error) => {
        console.error('Error creating offer:', error);
        // Handle the error appropriately, e.g., show an error message to the offer
      });
  };

  return (
    <div>
      <h2>Add Offer:</h2>
      <form>
      <label>
          Name:
          <input
            type="text"
            name="name"
            value={newOffer.name}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Code:
          <input
            type="text"
            name="code"
            value={newOffer.code}
            onChange={handleInputChange}
          />
        </label><br/>
        <label>
          Value:
          <input
            type="text"
            name="value"
            value={newOffer.value}
            onChange={handleInputChange}
          />
        </label><br/>
        <button type="button" onClick={handleAddOffer}>
          Add Offer
        </button>
      </form>
    </div>
  );
};

export default OfferAdd;
