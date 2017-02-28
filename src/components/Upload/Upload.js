import React, { Component } from 'react';
import './Upload.css';

import request from 'superagent';
import Button from 'react-button';


class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convertedImgLink: '',
            baseImg: '',
            buttonText: 'Browse..',
            onLoad: 'False'
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
        if (document.getElementById("convertedImg").src === this.state.convertedImgLink)
        {
            document.getElementById("convertedImg").src = this.state.baseImg;
        }
        else
        {
            document.getElementById("convertedImg").src = this.state.convertedImgLink;
        }
    }

    onClick() {

        var files = document.getElementById('file_to_upload').files;
        var iter = document.getElementById('iter');
        var mode = document.getElementById('mode');

        var formData = new FormData();

        if (files.hasOwnProperty(0) && files[0] instanceof File)
            formData.append('photo', files[0]);

            formData.append('iter',iter.value);
            formData.append('mode',mode.value);

            console.log("iter " + iter.value);
            console.log("mode " + mode.value);


            this.setState({buttonText: 'Sending..'});


        var req = request
            .post('http://localhost:8080/api/picshape/convert')
            //.post('https://picshape-engine.herokuapp.com/api/picshape/convert')
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
                 <a className="thumbnail">
                  <img className="img-responsive center-block" onClick={this._changeImage.bind(this)} id="convertedImg" src={this.state.convertedImgLink} width="100%" alt="" onMouseOver=""/>
                 </a>
         ) : (
             <div className="colonne_2 upload" >
                  <div className="fill"></div>
                      <p>
                      Choose a picture !
                      </p>
                  <div className="fill"></div>
             </div>
            )
     );

    return (
      <div className="panel panel-body">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {thumbnail}
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 center-block">
                    <form>
                        <div className="form-group">
                            Iteration :
                            <input className="form-control" id="iter" type="number" min="1" max="500"/>
                            Mode :
                            <select className="form-control" id="mode">
                              <option value="0">Combo</option>
                              <option value="1">Triangle</option>
                              <option value="2">Rectangle</option>
                              <option value="3">Ellipse</option>
                              <option value="4">Circle</option>
                              <option value="5">Rotatedrect</option>
                              <option value="6">Beziers</option>
                              <option value="7">Rotatedellipse</option>
                              <option value="8">Polygon</option>
                            </select>

                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <label className="btn btn-primary btn-file"> {this.state.buttonText}
                                    <input className="form-control" onChange={this._handleImageChange.bind(this)} type='file' encType='multipart/form-data' id='file_to_upload' name='photo' style={{display: "none"}}/>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <Button onClick={this.onClick.bind(this)} >Send</Button>
                            </div>
                        </div>

                        </form>




                </div>
            </div>
      </div>
    );
  }
}

export default Upload;
