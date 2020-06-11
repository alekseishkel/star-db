export default class SwapiService {
  constructor() {
    this._apiBase = `https://swapi.dev/api`;
  };

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${`${this._apiBase}${url}`}` + `recieved ${response.status}`)
    };

    return await response.json();
  };

  async getAllPeople() {
    const people = await this.getResource(`/people/`);
    return people.results.map((person) => this._transformPersonData(person));
  };

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPersonData(person);
  };

  async getAllPlanets() {
    const planets = await this.getResource(`/planets/`);
    return planets.results.map((planet) => this._transformPlanetData(planet));
  };

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanetData(planet);
  };

  async getAllStarships() {
    const starships = await this.getResource(`/starships/`);
    return starships.results.map((starship) => this._transformStarshipData(starship));
  };

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarshipData(starship);
  };

  _extractId (item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPersonData(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  };

  _transformPlanetData(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarshipData(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  };
}