import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePalge extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      selectedPerson: 1,
    };

    this.onPersonClick = (id) => {
      this.setState({
        selectedPerson: id
      });
    };
  };


  render() {
    const itemList = (
      <ItemList
        onPersonClick={this.onPersonClick}
        getData={this.swapiService.getAllPeople}>

        {(i) => `${i.name} (${i.gender})`}

      </ItemList>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  };
};

