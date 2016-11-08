import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
}
}

export default App;
