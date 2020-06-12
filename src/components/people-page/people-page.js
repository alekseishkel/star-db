import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error';

import './people-page.css';

export default class PeoplePalge extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 1,
      hasError: false
    };

    this.onPersonClick = (id) => {
      this.setState({
        selectedPerson: id
      });
    };
  };

  componentDidCatch() {
    this.setState({hasError: true})
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />
    }

    return (
      <section className="row mb2">
        <div className="col-md-6">
          <ItemList onPersonClick={this.onPersonClick} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </section>
    )
  };
};

