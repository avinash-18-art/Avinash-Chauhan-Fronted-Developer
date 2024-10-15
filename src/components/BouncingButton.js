import React from 'react';

const BouncingButton = ({ onClick }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:animate-bounce transition duration-300"
      onClick={onClick}
    >
      Bounce Button
    </button>
  );
};

export default BouncingButton;
