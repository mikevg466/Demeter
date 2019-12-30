import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DualSelectorContainer from '../../containers/DualSelector';
import FinalViewContainer from '../../containers/FinalView';
import Loader from '../../components/Loader';
import Logo from '../Icons/Baby';
import './Root.scss';

/**
 * Root React Component containing the presentational Root
 * @extends PureComponent
 */
export default class RootComponent extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { isLoading, isSortingFinished } = this.props;
    return (
      <div className='root'>
        <header className='header'>
          <div className='logo'>
            <Logo />
          </div>
        </header>
        {isLoading ? (
          <Loader />
        ) : isSortingFinished ? (
          <FinalViewContainer />
        ) : (
          <DualSelectorContainer />
        )}
      </div>
    );
  }
}

RootComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSortingFinished: PropTypes.bool.isRequired,
};
