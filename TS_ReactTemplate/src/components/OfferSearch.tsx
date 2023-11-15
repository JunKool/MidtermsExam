// UserSearch.tsx
import React, { useState , useEffect } from 'react';
import { offerServiceApi } from '../services/OfferService';
import Table from './Table';
import { OfferModel } from '../models/OfferModel';

const OfferSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<OfferModel[]>([]);
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
  const handleSearch = () => {
    // Implement the search logic based on first name, last name, or country
    // For simplicity, let's perform a case-insensitive search on any matching field
    const results = offers.filter(offer =>
      offer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'code', label: 'Code' },
    { key: 'value', label: 'Value' },
  ];

  return (
    <div>
      <h2>Offer Search:</h2>
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

export default OfferSearch;
