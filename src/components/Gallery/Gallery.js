import React from "react";
import request from "superagent";
import Card from "./Card.js";

class Gallery extends React.Component {
  render() {
    const title =
      <legend>Your own gallery</legend>
    return (
    <div className="panel panel-body container">
      <div className="row preview">
        {title}
      </div>
      <div className="row">
        <div className="ui link cards">
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/7ba1bknru"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/qpmsednr3"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/7ba1bknru"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/qpmsednr3"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/qpmsednr3"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
          <Card
            imgLink="http://localhost:8080/api/gallery/photos/qpmsednr3"
            uploaderName="le joli nom"
            imgDescription="Ceci n'est pas une description"
            uploadDate="12/23/2015"/>
        </div>
      </div>
    </div>
    );
  }
}

export default Gallery;
