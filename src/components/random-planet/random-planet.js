import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);

    this.onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false
      });
    };

    this.onPlanetError = () => {
      this.setState({
        loading: false,
        error: true
      })
    };
  };

  UNSAFE_componentWillMount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) + 1;

    this.swapiService.getPlanet(id)
      .then((planet) => this.onPlanetLoaded(planet))
      .catch(() => this.onPlanetError());
  };

  render() {
    const { planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorMessage /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <section className="random-planet jumbotron rounded">
        {errorMessage}
        {loader}
        {content}
      </section>
    );
  };
};

const PlanetView = ({planet}) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
      <React.Fragment>
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
          alt="That Planet"/>
        <div>
          <h2>{name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
};