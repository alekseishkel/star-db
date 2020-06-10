import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'
import Loader from '../loader';

import './random-planet.css'

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true
    };

    this.updatePlanet();

    this.onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false
      });
    };
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15) + 1;

    this.swapiService.getPlanet(id).then((planet) => this.onPlanetLoaded(planet));
  };

  render() {
    const { planet, loading} = this.state;

    const loader = loading ? <Loader /> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
      <section className="random-planet jumbotron rounded">
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
          alt="Some Planet"/>
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
    )
}