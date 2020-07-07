import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error';
import ErrorButton from '../error-button';

import './item-details.css';

const ItemField = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { ItemField };

export default class ItemDetails extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      item: null,
      imageUrl: null,
      error: false,
      loading: true
    };
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
      this.setState({
        loading: true
      })
      this.updateItem();
    };
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => this.setState({
        item,
        imageUrl: getImageUrl(item),
        loading: false
      }))
      .catch(() => this.setState({
        error: true,
        loading: false
      }));
  };

  render() {
    const { item, imageUrl, error, loading } = this.state;

    const hasData = !(loading || error);

    const err = error ? <ErrorMessage /> : null;
    const load = loading ? <Loader /> : null;
    const content = hasData ? <ItemView item={item} url={imageUrl} children={this.props.children}/> : null;

    return (
      <React.Fragment>
        {err}
        {load}
        {content}
      </React.Fragment>
    );
  };
};

const ItemView = ({ item, url, children }) => {
  const { name } = item;

  return (
    <div className="person-details card">
      <img className="person-image"
        src={url}
        alt="Some Person" />
      <div className="card-body">
        <h2>{name}</h2>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, {item})
            })
          }          
        </ul>
      <ErrorButton />
    </div>
    </div >
  );
}