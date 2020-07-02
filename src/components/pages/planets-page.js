import React, { Component } from 'react';

import Row from '../row';
import { PlanetsList, PlanetDetails } from '../sw-components';

export default class PlanetsePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: 3
    }
  }

  onItemClick = (selectedItem) => {
    console.log(this.state)
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Row 
        left={<PlanetsList onItemClick={this.onItemClick} />} 
        right={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}