import React from 'react';

import ItemDetails from '../item-details';
import { ItemField } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}>

              <ItemField field="gender" label="Gender" />
              <ItemField field="eyeColor" label="Eye Color" />

            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export { PersonDetails, PlanetDetails, StarshipDetails };