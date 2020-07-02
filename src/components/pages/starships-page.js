import React, { Component } from 'react';

import Row from '../row';
import { StarshipsList, StarshipDetails } from '../sw-components';

export default class StarshipsPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: 5
    }
  }

  onItemClick = (selectedItem) => {
    console.log(selectedItem)
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row 
        left={<StarshipsList onItemClick={this.onItemClick} />} 
        right={<StarshipDetails itemId={selectedItem} />} 
      />
    )
  }
}