import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${inputValue}`);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-2 py-1 border rounded mr-2"
      />
      <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
