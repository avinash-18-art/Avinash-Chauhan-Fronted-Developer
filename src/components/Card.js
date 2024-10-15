import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
