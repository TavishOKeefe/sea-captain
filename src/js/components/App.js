import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DataDisplay from './dataDisplay'


class App extends Component {
  render() {
    return (
      <DataDisplay />
    );
  }
}

export default App;
