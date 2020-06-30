import React from 'react';

import ItemList from '../item-list';
import {withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapper, func) => {
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

const PeopleList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderName)), 
                      mapPersonMethodsToProps);

const PlanetsList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderNameAndDiameter)), 
                        mapPlanetMethodsToProps);

const StarshipsList = withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderNameAndCost)), 
                          mapStarshipMethodsToProps);

export { PeopleList, PlanetsList, StarshipsList };