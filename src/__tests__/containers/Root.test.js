import React from 'react';
import { shallow } from 'enzyme';
import {
  RootContainer,
  mapStateToProps,
  mapDispatchToProps,
} from '../../containers/Root';
import { userInitialState } from '../../reducers/user';

const mockState = {
  greeting: userInitialState.greeting,
  name: userInitialState.name,
};
const mockDispatchers = {
  setName: jest.fn(),
};
const mockProps = {
  ...mockState,
  ...mockDispatchers,
};

describe('Root Container', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RootContainer {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('outputs the expected state when passed a mock store', () => {
      const mockStore = {
        user: userInitialState,
      };
      const expectedState = {
        greeting: userInitialState.greeting,
        name: userInitialState.name,
      };
      expect(mapStateToProps(mockStore)).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toEqual(
      Object.keys(mockDispatchers)
    );
  });
});
