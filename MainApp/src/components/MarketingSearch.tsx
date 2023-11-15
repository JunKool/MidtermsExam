// MarketingSearch.tsx
import React, { useState } from 'react';
import { marketingServiceApi } from '../services/MarketingService';

const MarketingSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchResults = marketingServiceApi.searchUserOfferRelationships(searchTerm);

  return (
    <div>
      <h2>Marketing Search:</h2>
      <form>
        <label>
          Search Term:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="button">Search</button>
      </form>
      {/* Display search results in a table or list */}
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
    </div>
  );
};

export default MarketingSearch;
