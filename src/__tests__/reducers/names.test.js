import namesReducer, { namesInitialState } from '../../reducers/names';
import types from '../../actions/types';

const getExpectedState = newState =>
  Object.assign({}, namesInitialState, newState);

describe('Names Reducer', () => {
  it('has the correct initial state', () => {
    expect(namesReducer(undefined, {})).toEqual(namesInitialState);
  });

  describe('ADD_CUSTOM_NAME', () => {
    it('returns the correct state with new name', () => {
      const customName = 'test customName';
      const rawList = ['testFirstName', 'testSecondName'];
      const initialState = getExpectedState({ customName, rawList });

      const expectedState = getExpectedState({
        customName: '',
        rawList: [...rawList, customName],
      });
      const action = {
        type: types.ADD_CUSTOM_NAME,
      };

      expect(namesReducer(initialState, action)).toEqual(expectedState);
    });

    it('returns the correct state with existing name', () => {
      const customName = 'testSecondName';
      const rawList = ['testFirstName', 'testSecondName'];
      const initialState = getExpectedState({ customName, rawList });

      const expectedState = getExpectedState({ customName: '', rawList });
      const action = {
        type: types.ADD_CUSTOM_NAME,
      };

      expect(namesReducer(initialState, action)).toEqual(expectedState);
    });

    it('returns the correct state with no customName', () => {
      const customName = '';
      const rawList = ['testFirstName', 'testSecondName'];
      const initialState = getExpectedState({ customName, rawList });

      const expectedState = getExpectedState({ customName: '', rawList });
      const action = {
        type: types.ADD_CUSTOM_NAME,
      };

      expect(namesReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('SET_CUSTOM_NAME', () => {
    it('returns the correct state', () => {
      const name = 'testName';
      const expectedState = getExpectedState({ customName: name });
      const action = {
        type: types.SET_CUSTOM_NAME,
        name,
      };

      expect(namesReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
