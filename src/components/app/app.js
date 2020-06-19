import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
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

    const itemList = (
      <ItemList
        onPersonClick={this.onPersonClick}
        getData={this.swapiService.getAllPlanets}
        renderItem={({ name, diameter }) => `${name}, (${diameter})`}
      />
    )

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

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

        <Row left={itemList} right={personDetails}/>
        <Row left={itemList} right={personDetails}/>

      </div>
    )
  }
};
