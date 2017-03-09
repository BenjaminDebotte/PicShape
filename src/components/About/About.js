import React, { Component } from 'react';
import './About.css';

import baseImg from './548x430.jpg';
import convertedImg from './548x430Shaped.jpg';

export class About extends Component {

  constructor(props) {
      super(props);
      this.state = {
        changeImg: true
    }
  }

  _changeImage(input) {
      if (this.state.changeImg)
      {
          document.getElementById("convertedImg").src = convertedImg;
          this.setState({changeImg: false});
      }
      else
      {
          document.getElementById("convertedImg").src = baseImg;
          this.setState({changeImg: true});
      }
  }

render() {
    return (

<div className="ui raised segment">
  <div className="ui equal width grid ">
    <div className="column">
      <div className="ui">
      <img className="ui fluid rounded image myImg" onClick={this._changeImage.bind(this)} id="convertedImg" src={baseImg} alt="" onMouseOver=""/>
      </div>
    </div>
    <div className="column">
      <div className="ui segment">
        <h2>ABOUT US</h2>

      <p>The Picshape project is composed of a front-end, back-end and an Android application.</p>
      <p>Picshape use a Node.js back-end hosting the API for image transformation and a front-end using React and Redux.
      It is a 3rd year project part of 'PicShape',
      a cloud image converter using fogleman primitive project.</p>

      <h2>Android Application</h2>
      <ul>
        <li>Aliquam venenatis leo et orci.</li>
        <li>Pellentesque eleifend vulputate massa.</li>
        <li>Vivamus eleifend sollicitudin eros.</li>
        <li>Maecenas vitae nunc.</li>
        </ul>
        </div>
    </div>


    <div className="equal width row">
      <div className="column">
          <div className="ui ">
            <h4 className="ui center aligned icon header">
              <i className="circular users icon"></i>
                  </h4>
            </div>
      </div>
    </div>

    <div className="equal width row">
        <div className="column">
          <div className="ui raised segment">
          <img className="ui medium circular rounded image" src={require('./team-member.gif')} alt="" />
                <p className="item">BenJ</p>
                <p className="item">Job Title Here</p>
          </div>
          </div>
        <div className="column">
        <div className="ui raised segment">
        <img className="ui medium circular rounded image" src={require('./team-member.gif')} alt="" />
              <p className="item">Guillaume</p>
              <p className="item">Job Title Here</p>
        </div>
        </div>
        <div className="column">
        <div className="ui raised segment">
        <img className="ui medium circular rounded image" src={require('./team-member.gif')} alt="" />
              <p className="item">ShowTime</p>
              <p className="item">Job Title Here</p>
        </div>
        </div>
        <div className="column">
        <div className="ui raised segment">
        <img className="ui medium circular rounded image" src={require('./team-member.gif')} alt="" />
              <p className="item">Philibert</p>
              <p className="item">Job Title Here</p>
        </div>
        </div>
        <div className="column">
        <div className="ui raised segment">
        <img className="ui medium circular rounded image" src={require('./team-member.gif')} alt="" />
              <p className="item">Antho</p>
              <p className="item">Job Title Here</p>
        </div>
        </div>
      </div>
  </div>

</div>



    );
  }
}

export default About;
