import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../components/Root';
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

describe('Root Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Root {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
