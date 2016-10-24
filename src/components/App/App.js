import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import request from 'superagent';
import Button from 'react-button';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convertedImgLink: '',
            baseImg: '',
            buttonText: 'Browse..'
        }
    }
    onClick(file) {

        var files = document.getElementById('file_to_upload').files;
        var formData = new FormData();

        if (files.hasOwnProperty(0) && files[0] instanceof File)
            formData.append('photo', files[0]);

            this.setState({buttonText: 'Sending..'});


        var req = request
            .post('http://localhost:8080/api/picshape/convert')
            .send(formData)


        console.log(req);

        req.end((err,res) => {
              if(err) {
                  console.log(err);
              }
              console.log(res);
              var body = JSON.parse(res.text);
              console.log(body);
              this.setState({convertedImgLink: body.url});
              console.log(this.state);

          });
}

  render() {
     const thumbnail = (this.state.convertedImgLink !== '' ? (
     <div className="row">
     <div className="col-md-4">
     </div>
       <div className="col-md-4">
         <a href="#" className="thumbnail">
           <img src={this.state.convertedImgLink} width="200px" alt=""/>
         </a>
       </div>
     </div>
 ) : "" );
    return (

      <div className="container App">
        <div className="row App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PicShape</h2>
        </div>
        <div className="row">
            <div className="col-md-4">
            </div>

            <div className="col-md-4 col-md-offset-4">
                <form>
                    <div className="form-horizontal">
                        <label className="btn btn-primary btn-file"> {this.state.buttonText}
                        <input type='file' encType='multipart/form-data' id='file_to_upload' name='photo' style={{display: "none"}}/>
                        </label>
                    </div>
                    </form>
                    <Button onClick={this.onClick.bind(this)} >Send</Button>
            </div>
        </div>
        {thumbnail}

      </div>
    );
  }
}

export default App;
