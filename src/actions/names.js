import types from './types';
import { shuffle } from '../utils/array';

/**
 * Action creator for SET_NAMES reducer
 * @param {Array} list Array of names to be set in the store
 * @return {Object} action with names array
 */
export const setNames = list => ({
  type: types.SET_NAMES,
  list,
});

/**
 * Action creator for SET_SELECTOR_NAMES reducer
 * @param {String} firstName First name for user selection
 * @param {String} secondName Second name for user selection
 * @return {Object} action with names array
 */
export const _setSelectorNames = (firstName, secondName) => ({
  type: types.SET_SELECTOR_NAMES,
  firstName,
  secondName,
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

/**
 * Temporary function that sets the first and second names in the list
 *  for user selection names
 * @return {Undefined}
 */
export const setSelectorNames = () => (dispatch, getState) => {
  const {
    names: { list },
  } = getState();
  dispatch(_setSelectorNames(list[0], list[1]));
};
