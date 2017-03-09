import React, { Component } from 'react';
import { connect } from 'react-redux'

import { convertFile } from '../../actions/upload';


import './Upload.css';

import request from 'superagent';
import Button from 'react-button';


class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Browse',
            onLoad: 'False'
        }
    }

    _handleImageChange(input) {
          console.log("_handleImageChange");
          input.preventDefault();

          let reader = new FileReader();
          let file = input.target.files[0];

          reader.onloadend = () => {
              console.log('On load end');
              this.props.dispatch({
                  type: 'LOAD_IMAGE_SUCCESS',
                  convertedImgLink: reader.result,
                  baseImg: reader.result
            });
        };
          reader.readAsDataURL(file)
    }

    _changeImage(input) {
      if (input.currentTarget.src === this.props.convertedImgLink) {
          input.currentTarget.src = this.props.baseImg;
      }
      else {
          input.currentTarget.src = this.props.convertedImgLink;
      }
    }

    onClick(event) {
        event.preventDefault();

        var files = document.getElementById('file_to_upload').files;
        var iter = document.getElementById('iter').value;
        var mode = document.getElementById('mode').value;

        if (files.hasOwnProperty(0) && files[0] instanceof File){
            this.props.dispatch(convertFile(files[0], {iter: iter, mode: mode}, this.props.token));
        }

}

  render() {
     const thumbnail = (this.props.convertedImgLink !== '' ? (
                 <a className="thumbnail">
                    <img className="ui fluid image img" onClick={this._changeImage.bind(this)} id="convertedImg" src={this.props.convertedImgLink} width="100%" alt="" onMouseOver=""/>
                 </a>
         ) : (
             <div>
                  <div className="fill img"></div>
                      <h1>
                      Choose a picture !
                      </h1>

                  <div className="fill"></div>
              </div>
            )
     );

    return (
        <div className="ui container">
        <div className="ui raised center aligned segment">
            <div className="row">
                    {thumbnail}
                    <label className="ui button"> {this.state.buttonText}
                        <input className="form-control" onChange={this._handleImageChange.bind(this)} type='file' encType='multipart/form-data' id='file_to_upload' name='photo' style={{display: "none"}}/>
                    </label>
            </div>
            <div className="row">
                <div className="center-block">
                    <form className="ui form">
                        <div className="field">
                            Iteration :
                            <input className="form-control" id="iter" type="number" min="1" max="500"/>
                        </div>
                        <div className="field">
                            Mode :
                            <select id="mode">
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

                        <button className="ui button" onClick={this.onClick.bind(this)} >Send</button>


                        </form>
                </div>
            </div>
            </div>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    messages: state.messages,
    convertedImgLink: state.upload.convertedImgLink,
    baseImg: state.upload.baseImg
  };
};

export default connect(mapStateToProps)(Upload);
