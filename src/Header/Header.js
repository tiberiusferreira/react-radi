// @flow
import React, { Component } from 'react';
import '../App.css';
import './Header.css'

class Header extends Component {
  render() {
    return (
        <div className="App-header">
            <div className="header-button">Farm</div>
            <div className="header-button">Events</div>
            <div className="header-button">Products</div>
        </div>
    );
  }
}

export default Header;
