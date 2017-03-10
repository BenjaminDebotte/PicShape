import request from 'superagent';

export function removePicture(imgLink, token) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });
console.log(imgLink);
        return request
        .delete(imgLink)
        .set('Authorization', 'token: ' + token)
        .then((res) => {
          console.log(res.body)
            dispatch({
                type: 'REMOVE_PICTURE_SUCCESS'
            });
        }, (err) => {
            console.log(err);
        });
    };
  }
