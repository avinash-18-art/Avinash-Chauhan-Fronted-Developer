import React, { useState } from 'react';

const ClickCounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleClick}
      >
        Click Counter Button
      </button>
      <p className="mt-2">You've clicked the button {count} times.</p>
    </div>
  );
};

export default ClickCounterButton;
