import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {
  const { data, onItemClick, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemClick(id)}>
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

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;