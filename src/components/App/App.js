import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import Button from 'react-button';


class App extends Component {
    onClick(file) {
        var files = document.getElementById('file_to_upload').files;
        var formData = new FormData();

        if (files.hasOwnProperty(0) && files[0] instanceof File)
            formData.append('photo', files[0]);



        var req = request
            .post('http://localhost:8080/api/picshape/convert')
            .send(formData)


        console.log(req);

        req.end((err,res) => {
              if(err) {
                  console.log(err);
              }
              console.log(res);

          });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form>
            <input type='file' encType='multipart/form-data' id='file_to_upload' name='photo' />
        </form>
        <Button onClick={this.onClick.bind(this)} >Send</Button>

      </div>
    );
  }
}

export default App;
