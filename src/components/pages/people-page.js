import React, { Component } from 'react';

import Row from '../row';
import { PeopleList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: 1
    }
  }

  onItemClick = (selectedItem) => {
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Row 
        left={<PeopleList onItemClick={this.onItemClick} />} 
        right={<PersonDetails itemId={selectedItem} />} 
      />
    )
  }
}