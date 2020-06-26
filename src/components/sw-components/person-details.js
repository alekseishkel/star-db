import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>

      <ItemField field="gender" label="Gender" />
      <ItemField field="eyeColor" label="Eye Color" />

    </ItemDetails>
  );
};
export default withSwapiService(PersonDetails);