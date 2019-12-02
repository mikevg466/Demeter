import types from './types';
import { shuffle } from '../utils/array';

/**
 * Action creator for SET_NAMES reducer
 * @param {Array} names Array of names to be set in the store
 * @return {Object} action with names array
 */
export const setNames = names => ({
  type: types.SET_NAMES,
  names,
});

/**
 * Loads names from source which are shuffled and saved to the store
 * @return {undfined}
 */
export const loadNames = () => dispatch => {
  // TODO: Replace test names below with names sourced from the database
  const names = ['Angela', 'Greg', 'Kris', 'Meg', 'Mike', 'Tara', 'Wico'];

  dispatch(setNames(shuffle(names)));
};
