import request from 'superagent';

export function getPictures(user) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });


        console.log(user);

        return request
        .get('http://localhost:8080/api/gallery/photos/' + user.name)
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
