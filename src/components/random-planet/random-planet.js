import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'

import './random-planet.css'

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      id: null,
      planetName: null,
      population: null,
      rotationPeriod: null,
      diameter: null
    };

    this.updatePlanet();
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*15);
    this.swapiService.getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          planetName: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        });
      });
  };

  render() {
    const { id, planetName, population, rotationPeriod, diameter } = this.state;

    return (
      <section className="random-planet jumbotron rounded">
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h2>{planetName}</h2>
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
      </section>
    );
  };
};