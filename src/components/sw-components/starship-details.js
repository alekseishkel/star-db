import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <ItemField field="model" label="Model" />
      <ItemField field="length" label="Length" />
      <ItemField field="costInCredits" label="Cost" />

    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);