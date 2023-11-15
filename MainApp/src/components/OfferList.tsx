// OfferList.tsx
import React, { useEffect, useState } from 'react';
import { offerServiceApi } from '../services/OfferService';
import Table from './Table';
import { OfferModel } from '../models/OfferModel';

const OfferList: React.FC = () => {
  const [offers, setOffers] = useState<OfferModel[]>([]);

  useEffect(() => {
    offerServiceApi.getAllOffers()
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'code', label: 'Code' },
    { key: 'value', label: 'Value' },
    
  ];

  return (
    <div>
      <h2>List of Offers:</h2>
      <Table columns={tableColumns} data={offers} />
    </div>
  );
};

export default OfferList;
