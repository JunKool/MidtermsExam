import React from 'react';

interface OfferModelProps {
  offer: {
    id: string;
    name: string;
    value: string;
    code: string;
  };
}

const OfferModel: React.FC<OfferModelProps> = ({ offer }) => {
  return (
    <div>
      <p>ID: {offer.id}</p>
      <p>Name: {offer.name}</p>
      <p>Value: {offer.value}</p>
      <p>Code: {offer.code}</p>
    </div>
  );
};

export default OfferModel;
