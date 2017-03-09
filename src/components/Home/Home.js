import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router';

export class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
    }
  }

  render() {
      return (
                <div className="ui">
                  <h1 className="ui huge header inverted">PicShape</h1>
                  <hr></hr>
                  <Link className="ui button blue" to="/upload"> Go! </Link>
              </div>
      );
  }
}
  export default Home;
