import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Messages from '../Messages/Messages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="ui main text middle container">
            <Messages messages={this.props.messages}/>

            {this.props.children}
        </div>
        <Footer/>
      </div>
    );
}
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(App);
