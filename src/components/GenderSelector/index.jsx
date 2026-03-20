import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Constants from '../../utils/constants';
import { setGenderType } from '../../actions/names';
import './GenderSelector.scss';

/**
 * Gender Selector Container for allowing the user to select which gender of
 *  names they would like to select from.
 * @extends Component
 */
export class GenderSelector extends Component {
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

export const mapStateToProps = state => ({});

export const mapDispatchToProps = { setGenderType };

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(GenderSelector);
