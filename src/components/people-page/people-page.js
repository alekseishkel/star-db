import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import Row from '../row';
import withData from '../item-list';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
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
    const { getPerson, getPersonImage } = this.swapiService;
    const itemList = (
      <ItemList
        onPersonClick={this.onPersonClick}>

        {(i) => `${i.name} (${i.gender})`}

      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <ItemField field="model" label="Model" />
        <ItemField field="length" label="Length" />
        <ItemField field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    )
  };
};

