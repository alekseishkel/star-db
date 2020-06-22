import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';

import './item-details.css'

export default class ItemDetails extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      item: null,
      error: false,
      loading: true
    };
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      })
      this.updateItem();
    };
  };

  updateItem() {
    const { itemId } = this.props;

    if (!itemId) {
      return;
    }

    this.swapiService.getPerson(itemId)
      .then((person) => this.setState({
        person,
        loading: false
      }))
      .catch(() => this.setState({
        error: true
      }));
  };

  render() {
    const { error, loading } = this.state;

    const hasData = !(loading || error);

    const err = error ? <ErrorMessage /> : null;
    const load = loading ? <Loader /> : null;
    const content = hasData ? <PersonView person={this.state.person} /> : null;

    return (
      <React.Fragment>
        {err}
        {load}
        {content}
      </React.Fragment>
    );
  };
};

const PersonView = ({person}) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <div className="person-details card">
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="Some Person" />
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
      <ErrorButton />
      </div>
    </div>
  );
}