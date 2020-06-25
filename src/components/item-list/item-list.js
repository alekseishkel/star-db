import React from 'react';

import hasData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

import './item-list.css';

const ItemList = (props) => {
  const { data, onPersonClick, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onPersonClick(id)}>
        {label}
      </li>
    )
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default hasData(ItemList, getAllPeople);