import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {

    render() {
      return (
        <div className="container Header">
          <div className="row Header-core">
            <img src={logo} className="Header-logo" alt="logo" />
            <h2>PicShape</h2>
          </div>
        </div>
      );
    }
    }

    export default Header;
