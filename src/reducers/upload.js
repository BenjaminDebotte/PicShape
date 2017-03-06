const initialState = {
    convertedImgLink: '',
    baseImg: '',
};

export default function upload(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      return Object.assign({}, state, {
        convertedImgLink: action.convertedImgLink,
    });
    case 'LOAD_IMAGE_SUCCESS':
      console.log("LOAD_IMAGE_SUCCESS");
      return Object.assign({}, state, {
          baseImg: action.baseImg,
          convertedImgLink: action.convertedImgLink
      });
    default:
      return state;
  }
}
