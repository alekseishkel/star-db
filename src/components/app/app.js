import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    
    this.state = {
      showRandomPlanet: true,
      selectedPerson: 1,
      hasError: false
    };
    
    this.toggleRandomPlanet = () => {
      this.setState((state) => {
        return {
          showRandomPlanet: !state.showRandomPlanet
        }
      });
    };
  };
  
  componentDidCatch() {
    this.setState({ hasError: true });
  };
  
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />
    }
    
    const { showRandomPlanet } = this.state;
    
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    return (
      
      <div className='star-db'>
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet} >
            Toggle Random Planet
            </button>
          <ErrorButton />
        </div>

        <PeoplePage />

        <section className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onPersonClick={this.onPersonClick} 
              getData={this.swapiService.getAllPlanets}
              renderItem={({name, diameter}) => `${name}, (${diameter})`}
            />
          </div>
          <div className="col-md-6">
            {/* <PersonDetails personId={this.state.selectedPerson} /> */}
          </div>
        </section>

        <section className="row mb2">
          <div className="col-md-6">
            <ItemList 
            onPersonClick={this.onPersonClick}
            getData={this.swapiService.getAllStarships}
            renderItem={({name, model}) => `${name} (${model})`}
            />
          </div>
          <div className="col-md-6">
            {/* <PersonDetails personId={this.state.selectedPerson} /> */}
          </div>
        </section>
      </div>
    )
  }
};
