import React, { Component } from 'react';
var request = require('superagent');

var Dropzone = require('react-dropzone');

class PicDrop extends Component {
    onUploaded(err, res) {
        console.log(res);
    }

    onDrop(file) {
      console.log('Received files: ', file);

       request
       .post('http://127.0.0.1:8080/api/photos/upload')
       .withCredentials()
       .attach(file.name, file)
       .end(this.onUploaded);
    }

    render() {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Drop some pictures here !</div>
            </Dropzone>
          </div>
      );
    }
};


export default PicDrop;
