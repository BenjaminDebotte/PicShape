import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import logo from './logo.png';
import './Header.css';

class Header extends Component {

    render() {
        const active = { borderBottomColor: '#93bf41' };

      return (
          <nav className="navbar navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">
           <img className="Header-logo" src="logo.ico" width="30" height="30" alt=""/>
         </a>
         
          <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>

          </nav>
      );
    }
    }

    export default Header;
