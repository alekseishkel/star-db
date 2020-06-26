import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />

    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);