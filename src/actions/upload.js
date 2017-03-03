import request from 'superagent';

export function convertFile(file, config, token) {
    return (dispatch) => {
        dispatch({
          type: 'CLEAR_MESSAGES'
        });

        //Building image data
        var formData = new FormData();
        formData.append('photo', file);

        request
        .post('http://localhost:8080/api/picshape/convert')
        .set('Authorization', 'token: ' + token)
        .send(formData)
        .then((res) => {
            console.log('Success');
            console.log(res);
        }, (err) => {
            console.log('Error');
            console.log(err);
        });
    };

}
