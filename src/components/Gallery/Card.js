import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLink: '',
            convertedImgLing: '',
            gravatarLink: '',
            uploaderName: '',
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
                input.currentTarget.src = this.props.imgLink;
            }
            else {
                input.currentTarget.src = this.props.convertedImgLink;
            }
        }

  render() {
    return (
      <div className="ui fluid card equal height grid">
        <div className="ui fluid image">
          <img id="cardImg" onClick={this._changeImage.bind(this)} src={this.props.imgLink}/>
        </div>
        <div className="content">
        <a className="ui basic image label">
          <img src={this.props.gravatarLink}/>
          {this.props.uploaderName}
        </a>
        </div>
      </div>
    );
  }
}

export default Card;
