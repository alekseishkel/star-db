import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error';

import './person-details.css'

export default class PersonDetails extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      person: null,
      error: false
    };
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;

    if(!personId) {
      return;
    }

    this.swapiService.getPerson(personId)
    .then((person) => this.setState({person}))
    .catch(() => this.setState({
      error: true
    }));
  }

  render() {
    const {person, error} = this.state;
    
    if (error) {
      return <ErrorMessage />
    }
    
    if (!person) {
      return <Loader />
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="Some Person"/>
        <div className="card-body">
        <h2>{name}</h2>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};