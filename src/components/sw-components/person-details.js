import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <ItemField field="gender" label="Gender" />
      <ItemField field="eyeColor" label="Eye Color" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);