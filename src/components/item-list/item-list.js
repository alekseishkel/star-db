import React, { Component } from 'react';

import Loader from '../loader';
import ErrorMessage from '../error';

import './item-list.css';

export default class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      error: false,
      itemList: null
    };

    this.renderItems = (item) => {
      return item.map(({ id, name }) => (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onPersonClick(id)}>
          {name}
        </li>
      ));
    };
  };

  componentDidMount() {
    const {getData} = this.props;
    console.log(getData)

    getData()
      .then((itemsList) => this.setState({
        itemsList
      }))
      .catch(() => this.setState({
        error: true
      }))
  };

  render() {
    const { itemsList, error } = this.state;

    if (error) {
      return <ErrorMessage />
    }

    if (!itemsList) {
      return <Loader />
    }

    const item = this.renderItems(itemsList);

    return (
      <ul className="item-list list-group">
        {item}
      </ul>
    );
  };
};