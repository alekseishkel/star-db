import React, { Component } from 'react';

import ErrorMessage from '../error';

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    
    this.state = {
      hasError: false
    };
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />
    };

    return this.props.children;
  };
};