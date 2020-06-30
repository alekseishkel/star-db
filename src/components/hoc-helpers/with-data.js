import React, { Component } from 'react';

import Loader from '../loader';
import ErrorMessage from '../error';

const withData = (View) => {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        error: false,
        data: null
      };
    };

    componentDidMount() {

      this.props.getData()
        .then((data) => this.setState({
          data
        }))
        .catch(() => this.setState({
          error: true
        }))
    };

    render() {
      const { data, error } = this.state;

      if (error) {
        return <ErrorMessage />
      }

      if (!data) {
        return <Loader />
      }

      return <View {...this.props} data={data} />
    };
  };
};

export default withData;