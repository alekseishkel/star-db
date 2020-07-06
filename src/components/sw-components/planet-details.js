import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);