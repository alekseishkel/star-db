import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import SwapiService from '../../services/swapi-service';
import DummyService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { StarshipDetails } from '../sw-components';


import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 1,
      hasError: false,
      swapiService: new SwapiService()
    };

    this.onServiceChange = () => {
      this.setState(({ swapiService }) => {
        const Service = swapiService instanceof SwapiService ? DummyService : SwapiService;

        return {
          swapiService: new Service()
        }
      })
    }
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="star-db">

              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet />

              <ErrorButton />

              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact/>
              <Route path="/people" component={PeoplePage}/>
              <Route path="/planets" component={PlanetsPage}/>
              <Route path="/starships" component={StarshipsPage} exact/>
              <Route path="/starships/:id" 
                render={({match}) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id}/>
                }}/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
};
