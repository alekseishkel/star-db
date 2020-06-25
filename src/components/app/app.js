import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import ItemDetails from '../item-details/';
import { ItemField } from '../item-details/item-details';
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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <ItemField field="gender" label="Gender" />
        <ItemField field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <ItemField field="model" label="Model" />
        <ItemField field="length" label="Length" />
        <ItemField field="costInCredits" label="Cost" />

      </ItemDetails>
    )

    return (
      <div className="star-db">
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

        <Row left={personDetails} right={starshipDetails} />

      </div>
    )
  }
};
