import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import DummyService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: 1,
      hasError: false,
      swapiService: new DummyService()
    };

    this.onServiceChange = () => {
      this.setState(({swapiService}) => {
        const Service =  swapiService instanceof SwapiService ? DummyService : SwapiService;

        console.log(Service.name)

        return {
          swapiService: new Service()
        }
      })
    }

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
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="star-db">
            <Header onServiceChange={this.onServiceChange} />
            {planet}

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet} >
                Toggle Random Planet
            </button>
              <ErrorButton />
            </div>

            {/* <PeoplePage /> */}

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={10} />

            <PeopleList onPersonClick={this.onPersonClick} />

            <PlanetsList onPersonClick={this.onPersonClick} />

            <StarshipsList onPersonClick={this.onPersonClick} />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
};
