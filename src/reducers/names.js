import update from 'immutability-helper';
import types from '../actions/types';
import { splitArray } from '../utils/array';

export const namesInitialState = {
  rawList: [],
  sortingList: [],
  firstName: '',
  secondName: '',
};

/**
 * The main names reducer function to be exported
 * @param  {Object} [state=namesInitialState]
 *    The current names store to be manipulated.
 *    If null, then the default initial state.
 * @param  {Object} action
 *    The reducer action, containing the action type and data to be processed.
 * @return {Object} The updated names state.
 */
export default function namesReducer(state = namesInitialState, action) {
  switch (action.type) {
    case types.INITIALIZE_SORTING_LIST: {
      const sortingList = splitArray(state.rawList);
      return update(state, {
        sortingList: { $set: sortingList },
      });
    }
    case types.SET_NAMES:
      return update(state, {
        rawList: { $set: action.rawList || [] },
      });
    case types.SET_SELECTOR_NAMES:
      return update(state, {
        firstName: { $set: action.firstName },
        secondName: { $set: action.secondName },
      });
    default:
      return state;
  }
}
