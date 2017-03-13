import request from 'superagent';
import { browserHistory } from 'react-router';

export function getPictures(user) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });


        return request
        .get('http://localhost:8080/api/gallery/photos/' + user.name)
        .then((res) => {
            dispatch({
                type: 'LOAD_PICTURES_SUCCESS',
                picturesList: res.body
            });
        }, (err) => {
        });
    };
  }
export function removePicture(imgLink, token, user) {
      return (dispatch) => {
          dispatch({
            type: 'CLEAR_MESSAGES'
          });
          return request
          .delete(imgLink)
          .set('Authorization', 'token: ' + token)
          .then((response) => {
            let JSONResponse = JSON.parse(response.text);
            if (response.ok) {
              dispatch(getPictures(user));
              dispatch({
                type: 'REMOVE_PICTURE_SUCCESS',
                messages: Array.isArray(JSONResponse) ? JSONResponse : [JSONResponse]
              });
            } else {
              dispatch({
                type: 'REMOVE_PICTURE_FAILURE',
                messages:  Array.isArray(JSONResponse) ? JSONResponse : [JSONResponse]
              });
            }
          });
      };
    }
