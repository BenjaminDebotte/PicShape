import React from "react";
import { connect } from 'react-redux'

import Card from "./Card.js";
import { getPictures } from '../../actions/gallery';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
      this.props.dispatch(getPictures(this.props.user))
    }

  render() {
    const title =
      <legend>Your own gallery</legend>;
    return (
    <div className="panel panel-body container">
      <div className="row preview">
        {title}
      </div>
      <div className="row">
        <div className="ui link cards">
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/converted-nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/converted-nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/converted-nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/converted-nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/converted-nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/Romain/nv1hwqhi0.jpeg"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
        </div>
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth.user
  };
};

export default connect (mapStateToProps)(Gallery);
