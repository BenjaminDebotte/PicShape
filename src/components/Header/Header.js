import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

import logo from './logo.png';
import './Header.css';

class Header extends Component {

    handleLogout(event) {
      event.preventDefault();
      this.props.dispatch(logout());
    }

    render() {
        const active = { borderBottomColor: '#93bf41' };

        const rightNav = (this.props.token ?  (
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/account">My Account</Link></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
                </ul>
            ) : (
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" activeStyle={active}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" activeStyle={active}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" activeStyle={active}>Signup</Link>
                </li>
              </ul>
            )

        );

      return (
          <nav className="navbar navbar-dark bg-inverse">
              <Link className="navbar-brand" to="/">
               <img className="Header-logo" src="logo.ico" width="30" height="30" alt=""/>
             </Link>

             {rightNav}
          </nav>
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
