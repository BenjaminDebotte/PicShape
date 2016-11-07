import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css';

ReactDOM.render(
  <Header />, document.getElementById('header')
 );
 ReactDOM.render(
   <App />, document.getElementById('root')
  );
  ReactDOM.render(
    <Footer />, document.getElementById('footer')
   );
