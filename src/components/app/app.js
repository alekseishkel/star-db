import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: 1
    };

    this.toggleRandomPlanet = () => {
      this.setState((state) => {
        return {
          showRandomPlanet: !state.showRandomPlanet
        }
      });
    };

    this.onPersonClick = (id) => {
      this.setState({
        selectedPerson: id
      })
    }
  };

  render() {
    const { showRandomPlanet } = this.state;

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (

      <div className='star-db'>
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
            </button>
        </div>

        <section className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonClick={this.onPersonClick}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </section>
      </div>
    )
  }
};
