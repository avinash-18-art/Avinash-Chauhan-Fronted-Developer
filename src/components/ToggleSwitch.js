import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="mt-4 flex items-center">
      <span className="mr-2">Toggle is {isOn ? "ON" : "OFF"}</span>
      <button
        className={`w-10 h-6 rounded-full ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        } relative transition-colors duration-300`}
        onClick={toggleSwitch}
      >
        <span
          className={`w-4 h-4 bg-white rounded-full absolute top-1 ${
            isOn ? 'right-1' : 'left-1'
          } transition-all duration-300`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
