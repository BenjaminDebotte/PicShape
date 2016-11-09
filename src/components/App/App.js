import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import Messages from '../Messages/Messages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Messages messages={this.props.messages}/>
        {this.props.children}
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
