import update from 'immutability-helper';
import types from '../actions/types';

export const namesInitialState = {
  list: [],
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
    case types.SET_NAMES:
      return update(state, {
        names: { $set: action.names || [] },
      });
    default:
      return state;
  }
}
