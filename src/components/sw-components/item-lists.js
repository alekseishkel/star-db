import React from 'react';

import ItemList from '../item-list';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const withChildFunction = (Wrapper, func) => {
  return (props) => (
    <Wrapper {...props}>
      {func}
    </Wrapper>
  )
}

const renderName = (i) => `${i.name} (${i.gender})`;
const renderNameAndDiameter = (i) => `${i.name} (${i.diameter})`;
const renderNameAndCost = (i) => `${i.name} (${i.costInCredits})`;

const PeopleList = withData(
                    withChildFunction(ItemList, renderName), 
                    getAllPeople);

const PlanetsList = withData(
                      withChildFunction(ItemList, renderNameAndDiameter), 
                      getAllPlanets);

const StarshipsList = withData(
                        withChildFunction(ItemList, renderNameAndCost), 
                        getAllStarships);

export { PeopleList, PlanetsList, StarshipsList };