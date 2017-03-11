import request from 'superagent';

export function convertFile(file, config, token) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });


        console.log(config);
        //Building image data
        var formData = new FormData();
        formData.append('photo', file);
        formData.append('mode', config.mode);
        formData.append('iter', config.iter);

        return request
        .post('http://picshape-engine-develop.herokuapp.com/api/picshape/convert')
        .set('Authorization', 'token: ' + token)
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
