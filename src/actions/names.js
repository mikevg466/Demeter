import types from './types';
import { shuffle } from '../utils/array';
import NAMES from '../assets/data/names.json';
// import NAMES from '../assets/data/namesCustom.json';

export const addCustomName = () => ({
  type: types.ADD_CUSTOM_NAME,
});

/**
 * Action creator for DELETE_PREVIEW_NAME reducer
 * @param {Number} index The index of the array item to delete
 * @return {Object} action with names array
 */
export const deletePreviewName = index => ({
  type: types.DELETE_PREVIEW_NAME,
  index,
});

/**
 * Action creator for INITIALIZE_SORTING_LIST reducer
 * @return {Object} action with names array
 */
export const _initializeSortingList = () => ({
  type: types.INITIALIZE_SORTING_LIST,
});

/**
 * Action creator for RESET_NAMES reducer
 * @return {Object} action with names array
 */
export const resetNames = () => ({
  type: types.RESET_NAMES,
});

export const setCustomName = name => ({
  type: types.SET_CUSTOM_NAME,
  name,
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
 * shuffles the rawList array then splits it to create the sorting list
 * @return {undfined}
 */
export const initializeSortingList = () => dispatch => {
  dispatch(shuffleNames());
  dispatch(_initializeSortingList());
};

/**
 * Loads names from source which are shuffled and saved to the store
 * @param {String} [genderType='M'] M for male, F for female.  Defaults to M
 * @return {undfined}
 */
export const loadNames =
  (genderType = 'M') =>
    dispatch => {
      dispatch(resetNames());
      const names = NAMES.data
        .filter(({ gender }) => gender === genderType)
        .slice(0, 1000)
        .map(({ name }) => name)
        .sort();

      dispatch(setNames(names));
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

/**
 * Shuffles the rawList of names then updates the state with the new list.
 * @return {undfined}
 */
export const shuffleNames = () => (dispatch, getState) => {
  const {
    names: { rawList },
  } = getState();
  dispatch(setNames(shuffle(rawList)));
};
