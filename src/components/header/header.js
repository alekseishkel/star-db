import React from 'react';

import './header.css';

const Header = () => {
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
    </header>
  );
};

export default Header;