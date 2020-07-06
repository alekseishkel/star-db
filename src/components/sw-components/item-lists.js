import React from 'react';

import ItemList from '../item-list';
import {withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (func) => (Wrapper) => {
  return (props) => (
    <Wrapper {...props}>
      {func}
    </Wrapper>
  )
}

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const renderName = (i) => `${i.name} (${i.gender})`;
const renderNameAndDiameter = (i) => `${i.name} (${i.diameter})`;
const renderNameAndCost = (i) => `${i.name} (${i.costInCredits})`;

const PeopleList = withSwapiService(mapPersonMethodsToProps)(
                    withData(
                      withChildFunction(renderName)(ItemList)));

const PlanetsList = withSwapiService(mapPlanetMethodsToProps)(
                      withData(
                        withChildFunction(renderNameAndDiameter)(ItemList)));

const StarshipsList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                          withChildFunction(renderNameAndCost)(ItemList)));

export { PeopleList, PlanetsList, StarshipsList };