const initialState = {
};

export default function removePictures(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'REMOVE_PICTURE_SUCCESS':
      console.log('REMOVE_PICTURE_SUCCESS');
      return initialState;
    default:
      return state;
  }
}
