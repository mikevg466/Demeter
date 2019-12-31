import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenderSelectorContainer from '../../containers/GenderSelector';
import DualSelectorContainer from '../../containers/DualSelector';
import FinalViewContainer from '../../containers/FinalView';
import Loader from '../../components/Loader';
import Logo from '../Icons/Baby';
import Constants from '../../utils/constants';
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
    const {
      genderType,
      isLoading,
      isSortingFinished,
      setGenderType,
    } = this.props;
    const isGenderSelected = !!genderType;

    const {
      GENDER_TYPES: { MALE, FEMALE },
    } = Constants;
    const genderClassName =
      genderType === MALE ? 'boy' : genderType === FEMALE ? 'girl' : '';

    return (
      <div className={`root ${genderClassName}`}>
        <header className='header'>
          <div
            className={`back-arrow ${isGenderSelected ? '' : 'hidden'}`}
            onClick={() => setGenderType('')}
          >
            {'<'}
          </div>
          <div className='logo-container'>
            <div className='logo'>
              <Logo />
            </div>
          </div>
        </header>
        {!isGenderSelected ? (
          <GenderSelectorContainer />
        ) : isLoading ? (
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
  genderType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSortingFinished: PropTypes.bool.isRequired,
  setGenderType: PropTypes.func.isRequired,
};
