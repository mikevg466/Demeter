import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../components/Root';

const mockProps = {
  displayListPreview: true,
  genderType: 'F',
  isLoading: false,
  isSortingFinished: true,
  setGenderType: jest.fn(),
};

describe('Root Component', () => {
  it('renders for girls', () => {
    const wrapper = shallow(<Root {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders for boys', () => {
    const wrapper = shallow(<Root {...mockProps} genderType='M' />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders with displayListPreview set to false', () => {
    const wrapper = shallow(<Root {...mockProps} displayListPreview={false} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders with isLoading set to true', () => {
    const wrapper = shallow(<Root {...mockProps} isLoading />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders with isSortingFinished set to false', () => {
    const wrapper = shallow(<Root {...mockProps} isSortingFinished={false} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
