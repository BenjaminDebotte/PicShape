import React from "react";
import { connect } from 'react-redux'

import Card from "./Card.js";
import { getPictures } from '../../actions/gallery';

import styles from './Gallery.css'

class Gallery extends React.Component {


    componentWillMount(){
      this.props.dispatch(getPictures(this.props.user));
    }

  render() {
    const NoImgMessage = "You haven't uploaded any image yet.";
    const title = <h1>My Gallery</h1>;
    const cardsList = (this.props.picturesList!==''?  (this.props.picturesList.map((picture, index) => {
        return (
          <div className="column">
            <Card
            imgIndex={index}
            imgLink={picture.photo}
            convertedImgLink={picture.converted}
            gravatarLink={this.props.user.gravatar}
            uploaderName={this.props.user.name}/>
          </div>
        )
      }
    )
  ):<h3>{NoImgMessage}</h3>);
    return (
    <div className="ui container">
      <div className="ui raised segment">
        {title}
        <div className="ui cards three column grid ">
          {cardsList}
        </div>
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth.user,
    picturesList: state.gallery.picturesList
  };
};

export default connect (mapStateToProps)(Gallery);
