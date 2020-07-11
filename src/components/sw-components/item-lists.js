import ItemList from '../item-list';
import {withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';

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

const PeopleList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const PlanetsList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withChildFunction(renderNameAndDiameter)
                      )(ItemList);

const StarshipsList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderNameAndCost)
                        )(ItemList);

export { PeopleList, PlanetsList, StarshipsList };