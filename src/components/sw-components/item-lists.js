import ItemList from '../item-list';
import hasData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const PeopleList = hasData(ItemList, getAllPeople);

const PlanetsList = hasData(ItemList, getAllPlanets);

const StarshipsList = hasData(ItemList, getAllStarships);

export { PeopleList, PlanetsList, StarshipsList };