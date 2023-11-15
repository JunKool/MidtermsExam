// MarketingList.tsx
import React from 'react';
import { marketingServiceApi } from '../services/MarketingService';

const MarketingList: React.FC = () => {
  const userOfferRelationships = marketingServiceApi.getAllUserOfferRelationships();

  return (
    <div>
      <h2>Marketing List:</h2>
      {/* Display user-offer relationships in a table or list */}
      <pre>{JSON.stringify(userOfferRelationships, null, 2)}</pre>
    </div>
  );
};

export default MarketingList;
