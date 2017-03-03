import request from 'superagent';

export function convertFile(file, config, token) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });

        //Building image data
        var formData = new FormData();
        formData.append('photo', file);

        return request
        .post('http://localhost:8080/api/picshape/convert')
        .set('Authorization', 'token: ' + token)
        .accept('application/json')
        .send(formData)
        .then((res) => {
            dispatch({
                type: 'UPLOAD_SUCCESS',
                convertedImgLink: res.body.url
            });
        }, (err) => {
            console.log(err);
        });
    };

}
