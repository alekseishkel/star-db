import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'

const App = () => {
  return (
    <div className='star-db'>
      <Header />
      <RandomPlanet />

      <section className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </section>
    </div>
  )
};

export default App;

