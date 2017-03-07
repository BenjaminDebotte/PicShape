const initialState = {
    picturesList: ''
};

export default function getPictures(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'LOAD_PICTURES_SUCCESS':
      console.log('LOAD_PICTURES_SUCCESS');
      return Object.assign({}, state, {
          picturesList: action.picturesList
      });
    default:
      return state;
  }
}
