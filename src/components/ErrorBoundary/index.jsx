import React from 'react';
import Menu from '../Menu';
import RefreshButton from '../RefreshButton';
import './style.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <Menu skeleton={false} />
          <h1>Something went wrong.</h1>
          <RefreshButton />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
