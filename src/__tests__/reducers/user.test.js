import userReducer, { userInitialState } from '../../reducers/user';
import types from '../../actions/types';

const getExpectedState = newState =>
  Object.assign({}, userInitialState, newState);

describe('User Reducer', () => {
  it('has the correct initial state', () => {
    expect(userReducer(undefined, {})).toEqual(userInitialState);
  });

  describe('SET_NAME', () => {
    it('returns the correct state', () => {
      const name = 'testName';
      const expectedState = getExpectedState({ name });
      const action = {
        type: types.SET_NAME,
        name,
      };

      expect(userReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('SET_GREETING', () => {
    it('returns the correct state', () => {
      const greeting = 'testGreeting';
      const expectedState = getExpectedState({ greeting });
      const action = {
        type: types.SET_GREETING,
        greeting,
      };

      expect(userReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
