import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipsList } from '../sw-components';

const StarshipsPage = ({history}) => {
  return (
    <StarshipsList 
      onItemClick={(id) => history.push(`/starships/${id}`)} />
  );
};

export default withRouter(StarshipsPage);