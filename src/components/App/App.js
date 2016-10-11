import React, { Component } from 'react';

import PicDrop from '../PicDrop/PicDrop'

import './App.css';
import '../../../bower_components/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            <form action="http://localhost:8080/api/photos/upload" method="post" encType="multipart/form-data">
              <input type="file" name ="photo" accept="application/x-zip-compressed,image/*"/>
              <input type="submit" value="Upload selected file to server"/>
            </form>
        </div>
    );
  }
}

export default App;
