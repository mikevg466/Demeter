import React from 'react';
import { shallow } from 'enzyme';
import {
  RootContainer,
  mapStateToProps,
  mapDispatchToProps,
} from '../../containers/Root';
import { namesInitialState } from '../../reducers/names';

const mockState = {
  genderType: namesInitialState.genderType,
  isSortingFinished: namesInitialState.isSortingFinished,
  rawList: namesInitialState.rawList,
  sortingList: namesInitialState.sortingList,
};
const mockDispatchers = {
  loadNames: jest.fn(),
  setGenderType: jest.fn(),
  setSelectorNames: jest.fn(),
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
        names: namesInitialState,
      };

      expect(mapStateToProps(mockStore)).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toEqual(
      // eslint-disable-next-line comma-dangle
      Object.keys(mockDispatchers)
    );
  });
});
