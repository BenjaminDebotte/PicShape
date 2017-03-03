const initialState = {
  convertedImgLink: '',
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
    default:
      return state;
  }
}
