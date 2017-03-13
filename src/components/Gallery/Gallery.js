import React from "react";
import { connect } from 'react-redux'

import Card from "../Card/Card.js";
import { getPictures, removePicture } from '../../actions/gallery';

import styles from './Gallery.css'

class Gallery extends React.Component {


    componentWillMount(){
      this.props.dispatch(getPictures(this.props.user));
    }


    _removePicture(src, callback){
      this.props.dispatch(removePicture(src, this.props.token, this.props.user));
    }


  render() {
    const NoImgMessage = "You haven't uploaded any image yet.";
    const title = <h1>My Gallery</h1>;
    const cardsList = (this.props.picturesList.length>>0?(this.props.picturesList.map((picture, index) => {
        return (
          <div className="column">
            <Card
            imgLink={picture.photo}
            convertedImgLink={picture.converted}
            gravatarLink={this.props.user.gravatar}
            uploaderName={this.props.user.name}
            index={index}
            onRemoveClicked={(src) => this._removePicture(src, () => {
              this.props.dispatch(getPictures(this.props.user));
            })}/>
          </div>

        )
      }
    )
  ):<h3>{NoImgMessage}</h3>);
    return (
      <div className="ui raised center aligned segment">
        {title}
        <div className="ui cards three column grid centered">
          {cardsList}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    picturesList: state.gallery.picturesList,
    messages: state.messages
  }
};

export default connect (mapStateToProps)(Gallery);
