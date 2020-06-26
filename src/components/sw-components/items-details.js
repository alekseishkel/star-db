import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;


const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>

      <ItemField field="gender" label="Gender" />
      <ItemField field="eyeColor" label="Eye Color" />

    </ItemDetails>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />

    </ItemDetails>
  )
};

const StarshipDetails = ({ itemId }) => {
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

export { PersonDetails, PlanetDetails, StarshipDetails };