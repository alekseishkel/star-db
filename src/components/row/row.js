import React from 'react';

import './row.css';

const Row = ({left, right}) => {
  return (
    <section className="row mb2">
    <div className="col-md-6">
      {left}
    </div>
    <div className="col-md-6">
      {right}
    </div>
  </section>
  );
};

export default Row;