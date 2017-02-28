import React, { Component } from 'react';
import './About.css';

import baseImg from './548x430.jpg';
import convertedImg from './548x430Shaped.jpg';

class About extends Component {

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
      <div className="wrapper row2">
      <div id="container" className="clear">

    <div id="about-us" className="clear">

      <div id="about-intro" className="clear">
        <div className="three_fifth first"><img className="imgholder myImg" onClick={this._changeImage.bind(this)} id="convertedImg" src={baseImg} alt="" onMouseOver=""/>
       </div>
        <div className="two_fifth">
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
            <li>Ut pretium odio eu nisi.</li>
            <li>Nam condimentum mi id magna.</li>
            <li>Pellentesque consectetuer, felis vel rhoncus.</li>
          </ul>
        </div>
      </div>

        <div id="team">
        <h2>The Team</h2>
        <ul className="clear">
          <li className="one_fifth first">
            <div className="figure"><img src={require('./team-member.gif')} alt="" />
              <div className="figcaption">
                <p className="team_name">BenJ</p>
                <p className="team_title">Job Title Here</p>
              </div>
            </div>
          </li>
          <li className="one_fifth">
            <div className="figure"><img src={require('./team-member.gif')} alt="" />
              <div className="figcaption">
                <p className="team_name">Chautime</p>
                <p className="team_title">Job Title Here</p>
              </div>
            </div>
          </li>
          <li className="one_fifth">
            <div className="figure"><img src={require('./team-member.gif')} alt="" />
              <div className="figcaption">
                <p className="team_name">Philibert</p>
                <p className="team_title">Job Title Here</p>
              </div>
            </div>
          </li>
          <li className="one_fifth">
            <div className="figure"><img src={require('./team-member.gif')} alt="" />
              <div className="figcaption">
                <p className="team_name">Gaillaume</p>
                <p className="team_title">Job Title Here</p>
              </div>
            </div>
          </li>
          <li className="one_fifth">
            <div className="figure"><img src={require('./team-member.gif')} alt="" />
              <div className="figcaption">
                <p className="team_name">Antho</p>
                <p className="team_title">Job Title Here</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
  </div>
</div>
    );
  }
}

export default About;
