import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import upload from './upload';
import gallery from './gallery';
import wall from './wall';


export default combineReducers({
  auth,
  messages,
  upload,
  gallery,
  wall
});
