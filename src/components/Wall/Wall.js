import React from "react";
import { connect } from 'react-redux'

import Card from "../Card/Card.js";
import { getWallPictures, removePicture } from '../../actions/wall';

import styles from './Wall.css'

class Wall extends React.Component {


    componentWillMount(){
      this.props.dispatch(getWallPictures(this.props.user));
    }

    _removePicture(src){
      console.log("delete dans Gallery : " + src);
      this.props.dispatch(removePicture(src, this.props.token));
      this.forceUpdate();
    }


  render() {
    const NoImgMessage = "There are no uploaded image yet.";
    const title = <h1>Wall of shapes</h1>;
    const cardsList = (this.props.picturesList.length>>0?(this.props.picturesList.map((picture, index) => {
        return (
          <div className="column">
            <Card
            imgLink={picture.photo}
            convertedImgLink={picture.converted}
            gravatarLink={this.props.user.gravatar}
            uploaderName={picture.user}
            index={index}
            onRemoveClicked={(src) => this._removePicture(src)}/>
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
    picturesList: state.wall.picturesList,
    messages: state.messages
  }
};

export default connect (mapStateToProps)(Wall);
