// @flow
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Farm from './Farm/Farm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Farm></Farm>
      </div>
    );
  }
}


export default App;
