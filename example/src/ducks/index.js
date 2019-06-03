import { combineReducers } from 'redux';
import types from './types';
import Reducers from './reducers';
import actions from './actions';

export default combineReducers({
    files: Reducers
});

export {
  types,
  actions
};