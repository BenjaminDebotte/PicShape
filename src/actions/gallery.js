import request from 'superagent';
import { browserHistory } from 'react-router';

export function getPictures(user) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });

        console.log(user);

        return request
        .get('http://picshape-engine-develop.herokuapp.com/api/gallery/photos/' + user.name)
        .then((res) => {
          console.log(res.body)
            dispatch({
                type: 'LOAD_PICTURES_SUCCESS',
                picturesList: res.body
            });
        }, (err) => {
            console.log(err);
        });
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
