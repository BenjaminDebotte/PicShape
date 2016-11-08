import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import logo from './logo.png';
import './Header.css';

class Header extends Component {

    render() {
        const active = { borderBottomColor: '#93bf41' };

      return (
        <div className="container Header">
          <div className="row Header-core">
            <img src={logo} className="Header-logo" alt="logo" />
            <h2>PicShape</h2>
          </div>

          <ul className="nav navbar-nav navbar-right">
             <li><Link to="/login" activeStyle={active}>Login</Link></li>
             <li><Link to="/signup" activeStyle={active}>Sign up</Link></li>
           </ul>

        </div>
      );
    }
    }

    export default Header;
