import React, { Component } from 'react';

import PicDrop from '../PicDrop/PicDrop'

import './App.css';
import '../../../bower_components/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <img src='primitive.jpg' className="App-logo" alt="logo" />
            </div>
            <div className="col-md-6 col-md-offset-6">
            <form enctype="multipart/form-data" action="http://localhost:8080/api/photos/upload" method="POST">
                Choose a file to upload: 
                <input name="photo" type="file" /><br />
                <input type="submit" value="Upload File" />
                </form>
            </div>

        </div>
    );
  }
}

export default App;
