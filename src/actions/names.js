import types from './types';
import { shuffle } from '../utils/array';

/**
 * Action creator for INITIALIZE_SORTING_LIST reducer
 * @return {Object} action with names array
 */
export const initializeSortingList = () => ({
  type: types.INITIALIZE_SORTING_LIST,
});

/**
 * Action creator for SET_NAMES reducer
 * @param {Array} rawList Array of names to be set in the store
 * @return {Object} action with names array
 */
export const setNames = rawList => ({
  type: types.SET_NAMES,
  rawList,
});

/**
 * Action creator for SET_SELECTOR_NAMES reducer
 * @return {Object} action with names array
 */
export const setSelectorNames = () => ({
  type: types.SET_SELECTOR_NAMES,
});

/**
 * Action creator for SORT_SELECTOR_NAMES reducer
 * @param {Number} compareValue A positive or negative number to show
 *                                how the user wants to sort the names.
 * @return {Object} action with names array
 */
export const sortSelectorNames = compareValue => ({
  type: types.SORT_SELECTOR_NAMES,
  compareValue,
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
 * Selects a name from two choices and updates the sort list then sets new names
 *  to compare.
 * @param {Number} compareValue A positive or negative number to show
 *                                how the user wants to sort the names.
 * @return {undfined}
 */
export const selectName = compareValue => dispatch => {
  dispatch(sortSelectorNames(compareValue));
  dispatch(setSelectorNames());
};
