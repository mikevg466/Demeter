import types from './types';
import { shuffle } from '../utils/array';
import NAMES from '../assets/data/names.json';

/**
 * Action creator for INITIALIZE_SORTING_LIST reducer
 * @return {Object} action with names array
 */
export const initializeSortingList = () => ({
  type: types.INITIALIZE_SORTING_LIST,
});

/**
 * Action creator for RESET_NAMES reducer
 * @return {Object} action with names array
 */
export const resetNames = () => ({
  type: types.RESET_NAMES,
});

/**
 * Action creator for SET_GENDER_TYPE reducer
 * @param {String} genderType Gender type constant: M for male, F for female
 * @return {Object} action with names array
 */
export const setGenderType = genderType => ({
  type: types.SET_GENDER_TYPE,
  genderType,
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
 * @param {Boolean} [removeName=false] True if the compareValue represents a
 *                                      name to remove instead of sorted
 * @return {Object} action with names array
 */
export const sortSelectorNames = (compareValue, removeName = false) => ({
  type: types.SORT_SELECTOR_NAMES,
  compareValue,
  removeName,
});

/**
 * Loads names from source which are shuffled and saved to the store
 * @param {String} [genderType='M'] M for male, F for female.  Defaults to M
 * @return {undfined}
 */
export const loadNames = (genderType = 'M') => dispatch => {
  dispatch(resetNames());
  const names = NAMES.data
    .filter(({ gender }) => gender === genderType)
    .slice(0, 1000)
    .map(({ name }) => name);

  dispatch(setNames(shuffle(names)));
};

/**
 * Removes a name from two choices and updates the sort list then sets new names
 *  to compare.
 * @param {Number} compareValue A positive or negative number to show
 *                                how the user wants to sort the names.
 * @return {undfined}
 */
export const removeName = compareValue => dispatch => {
  dispatch(sortSelectorNames(compareValue, true));
  dispatch(setSelectorNames());
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
