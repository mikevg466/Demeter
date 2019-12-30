import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Constants from '../../utils/constants';
import './GenderSelector.scss';

/**
 * Gender Selector Container for allowing the user to select which gender of
 *  names they would like to select from.
 * @extends PureComponent
 */
export default class GenderSelector extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { setGenderType } = this.props;
    return (
      <div className='gender-selector'>
        <span className='header-label'>Select Gender</span>
        <div className='selectors'>
          <div
            className='button boy'
            onClick={() => setGenderType(Constants.GENDER_TYPES.MALE)}
          >
            Boy
          </div>
          <div className='divider' />
          <div
            className='button girl'
            onClick={() => setGenderType(Constants.GENDER_TYPES.FEMALE)}
          >
            Girl
          </div>
        </div>
      </div>
    );
  }
}

GenderSelector.propTypes = {
  setGenderType: PropTypes.func.isRequired,
};
