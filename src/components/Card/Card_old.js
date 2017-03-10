import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLink: '',
            uploaderName: '',
            imgDescription: '',
            uploadDate: ''
        }
    }

  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.imgLink}/>
        </div>
        <div className="content">
          <div className="header">{this.props.uploaderName}</div>
          <div className="meta">
          </div>
          <div className="description">
            {this.props.imgDescription}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            {this.props.uploadDate}
          </span>
          <span>
            <i className="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
