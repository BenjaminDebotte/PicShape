import React, { Component } from 'react';
import './App.css';

import Upload from '../Upload/Upload';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Upload/>
        <Footer/>
      </div>
    );
}
}

export default App;
