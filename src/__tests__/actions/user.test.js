import { UserActions } from '../../actions';
import types from '../../actions/types';

describe('User Actions', () => {
  describe('action creators', () => {
    it('setName creates expected action', () => {
      const testName = 'test';
      expect(UserActions.setName(testName)).toEqual({
        type: types.SET_NAME,
        name: testName,
      });
    });

    it('setGreeting creates expected action', () => {
      const testGreeting = 'test';
      expect(UserActions.setName(testGreeting)).toEqual({
        type: types.SET_NAME,
        name: testGreeting,
      });
    });
  });
});
