import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <ItemField field="model" label="Model" />
      <ItemField field="length" label="Length" />
      <ItemField field="costInCredits" label="Cost" />

    </ItemDetails>
  )
};

export default withSwapiService(StarshipDetails);