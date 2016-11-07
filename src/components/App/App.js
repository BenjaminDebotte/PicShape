import React, { Component } from 'react';
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

    _handleImageChange(input) {
          console.log("_handleImageChange");
          input.preventDefault();

          let reader = new FileReader();
          let file = input.target.files[0];

          reader.onloadend = () => {
            this.setState({baseImg: reader.result,convertedImgLink: reader.result});
          }
          reader.readAsDataURL(file)
    }

    _changeImage(input) {
        console.log("clickOnImg");
        if (document.getElementById("convertedImg").src == this.state.convertedImgLink)
        {
            document.getElementById("convertedImg").src = this.state.baseImg;
        }
        else
        {
            document.getElementById("convertedImg").src = this.state.convertedImgLink;
        }
    }

    onClick(file) {

        var files = document.getElementById('file_to_upload').files;

        var formData = new FormData();

        if (files.hasOwnProperty(0) && files[0] instanceof File)
            formData.append('photo', files[0]);
            formData.append('iter',10);
            formData.append('mode',0);

            this.setState({buttonText: 'Sending..'});


        var req = request
            //.post('http://localhost:8080/api/picshape/convert')
            .post('https://picshape-engine.herokuapp.com/api/picshape/convert')
            .send(formData)

        console.log(req);

        req.end((err,res) => {
              if(err) {
                  console.log(err);
              }
              console.log(res);
              var body = JSON.parse(res.text);
              console.log("body : " + body);
              this.setState({convertedImgLink: body.url});
              console.log(this.state);
              this.setState({buttonText: 'Browse..'});
          });

}

  render() {
     const thumbnail = (this.state.convertedImgLink !== '' ? (
     <div className="row">
       <div className="colonne_2">
         <a className="thumbnail">
           <img onClick={this._changeImage.bind(this)} id="convertedImg" src={this.state.convertedImgLink} width="700px" alt="" onMouseOver=""/>
         </a>
       </div>
     </div>
 ) : <div className="colonne_2 App" >
  <a>
  Choose a picture !
  </a>
 </div> );
    return (
      <div className="container App">
        <div className="row">
            <div className="colonne col-md-offset-4">
                <form>
                    <div className="form-horizontal">
                        <label className="btn btn-primary btn-file"> {this.state.buttonText}
                        <input onChange={this._handleImageChange.bind(this)} type='file' encType='multipart/form-data' id='file_to_upload' name='photo' style={{display: "none"}}/>
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
