import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import upload from './upload';
import gallery from './gallery';
import card from './card';


export default combineReducers({
  auth,
  messages,
  upload,
  gallery,
  card
});
