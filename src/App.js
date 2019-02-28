import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Routing from './Routing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;
