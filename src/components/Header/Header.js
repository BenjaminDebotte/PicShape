import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

import './Header.css';

class Header extends Component {

    handleLogout(event) {
      event.preventDefault();
      this.props.dispatch(logout());
    }

    render() {
        const active = { borderBottomColor: '#93bf41' };

        const unloggedComponents = ([
            <Link className="item" to="/login" activeStyle={active}>Login</Link>,
            <Link className="item" to="/signup" activeStyle={active}>Signup</Link>
        ]);

        const loggedComponents = ([
            <Link className="item" to="/wall">Wall</Link>,
            <Link className="item" to="/gallery">My Gallery</Link>,
            <Link className="item" to="/account">My Account</Link>,
            <Link className="item" onClick={this.handleLogout.bind(this)}>Logout</Link>
        ]);

      return (
          <div className="ui inverted menu">
            <div className="ui container">
                <Link className="header item" to="/home">
                <img className="logo logo-spin" src="logo.ico"/>
                      Picshape
                  </Link>
                <Link className="item" to="/upload" activeStyle={active}>Upload</Link>
                { this.props.token ? loggedComponents : unloggedComponents }
                <Link className="item" to="/about" activeStyle={active}>About</Link>
            </div>
          </div>

      );
    }
    }


    const mapStateToProps = (state) => {
      return {
        token: state.auth.token,
        user: state.auth.user
      };
    };

    export default connect(mapStateToProps)(Header);
