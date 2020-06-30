import React from 'react';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <header className="header d-flex">
      <h1>
        <a href='#'>Star DB</a>
      </h1>
      <nav>
        <ul className="d-flex">
          <li>
            <a href='#'>People</a>
          </li>
          <li>
            <a href='#'>Planets</a>
          </li>
          <li>
            <a href='#'>Starships</a>
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