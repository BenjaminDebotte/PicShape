import request from 'superagent';
import { browserHistory } from 'react-router';

export function getWallPictures(user) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });

        console.log(user);

        return getAllUsersPictures(dispatch)
      };
  }

export function removePicture(imgLink, token) {
      return (dispatch) => {
          dispatch({
            type: 'CLEAR_MESSAGES'
          });
          console.log(imgLink);
          return request
          .delete(imgLink)
          .set('Authorization', 'token: ' + token)
          .then((response) => {
            if (response.ok) {
              let JSONResponse = JSON.parse(response.text);
              dispatch({
                type: 'REMOVE_PICTURE_SUCCESS',
                messages: Array.isArray(JSONResponse) ? JSONResponse : [JSONResponse]
              });
              browserHistory.push('/gallery');
            } else {
              dispatch({
                type: 'REMOVE_PICTURE_SUCCESS',
                messages: response.body.errorMessage
              });
              browserHistory.push('/gallery');
            }
          });
      };
    }

/**
* This function return names from JSON user string
**/
function getAllNames(jsonUser){

  var namesList = [];

  for (var i = 0; i < jsonUser.users.length; i++) {
    var user = jsonUser.users[i];
    namesList.push(user.name);
  }
  return namesList;
}

/**
*
**/
function handlePicture(res, longueur, dispatch){

  for (var j = 0; j < res.body.length; j++) {
    var pic = res.body[j];
    allPictures.push(pic);
  }

  userProcessed ++;


  if(userProcessed === longueur){
    dispatch({
        type: 'LOAD_ALL_PICTURES_SUCCESS',
        picturesList: allPictures
    });
  }
}

var userProcessed = 0;
var allPictures = [];

function getAllUsersPictures(dispatch){

  var namesList;
  userProcessed = 0;
  allPictures = [];

  request
  .get(process.env.REACT_APP_BACKEND_URI + '/api/users/')
  .then((res) => {
    console.log(res.body)

    namesList = getAllNames(res.body);
    for (var i = 0; i < namesList.length; i++) {
      request
      .get(process.env.REACT_APP_BACKEND_URI + '/api/gallery/photos/' + namesList[i])
      .then((res2) => handlePicture(res2, namesList.length, dispatch));
    }

  });


}
