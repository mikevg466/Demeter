import { combineReducers } from 'redux';
import user from './user';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
