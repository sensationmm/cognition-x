import { combineReducers } from 'redux';
import { ui } from './ui';
import { loader } from './loader';
import { stories } from './stories';

export default combineReducers({
  ui,
  loader,
  stories
});
