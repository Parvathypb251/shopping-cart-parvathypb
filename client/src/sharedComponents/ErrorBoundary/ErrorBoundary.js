import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      info: null,
    };
  }

  static getDerivedStateFromError(error, info) {
    console.log(error,info)
    return { error: true, info };
  }

  componentDidCatch(error, info) {
    console.log(error,info)

    this.setState((prev) => ({
      ...prev,
      info,
    }));
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div>
          <h5>Got some Error!. Please reload the page!</h5>
        </div>
      );
    }
    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.shape().isRequired,
};
export default ErrorBoundary;
