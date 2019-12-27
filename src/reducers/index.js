import { combineReducers } from 'redux';
import names from './names';
import user from './user';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  names,
  user,
});

export default rootReducer;
