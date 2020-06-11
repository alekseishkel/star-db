import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error';

import './item-list.css';

export default class ItemList extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      error: false,
      peopleList: null
    };

    this.renderPeople = (people) => {
      return people.map(({ id, name }) => (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onPersonClick(id)}>
          {name}
        </li>
      ));
    };
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => this.setState({
        peopleList: peopleList
      }))
      .catch(() => this.setState({
        error: true
      }))
  };

  render() {
    const { peopleList, error } = this.state;

    if (error) {
      return <ErrorMessage />
    }

    if (!peopleList) {
      return <Loader />
    }

    const people = this.renderPeople(peopleList);

    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  };
};