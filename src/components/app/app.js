import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorMessage from '../error';
import SwapiService from '../../services/swapi-service';
import DummyService from '../../services/dummy-swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages';
import { StarshipDetails } from '../sw-components';


import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      swapiService: new SwapiService(),
      isLoggedIn: false
    };

    this.onLogin = () => {
      this.setState({
        isLoggedIn: true
      })
    }

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
    const { isLoggedIn } = this.state;

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

              <Switch>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} />
                <Route path="/login" render={() =>
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />
                } />
                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

                <Route render={() => <h2>Page not found</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
};
