import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipsList } from '../sw-components';

const StarshipsPage = ({history}) => {
  return (
    <StarshipsList onItemClick={(itemId) => {
      history.push(`/starships/${itemId}`);
    }} />
  );
};

export default withRouter(StarshipsPage);