import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <header className="header d-flex">
      <h1>
        <Link to="/">StarDB</Link>
      </h1>
      <nav>
        <ul className="d-flex">
          <li>
            <Link to="/people/">People</Link>
          </li>
          <li>
            <Link to="/planets/">Planets</Link>
          </li>
          <li>
            <Link to="/starships/">Starships</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <button 
        onClick={onServiceChange}
        className="btn btn-primary">
          Change Service
      </button>
    </header>
  );
};

export default Header;