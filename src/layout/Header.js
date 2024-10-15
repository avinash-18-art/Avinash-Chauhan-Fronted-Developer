import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
