import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGenderType } from '../../actions/names';
import GenderSelector from '../../components/GenderSelector';

/**
 * Gender Selector Container for allowing the user to select which gender of
 *  names they would like to select from.
 * @extends Component
 */
export class GenderSelectorContainer extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { setGenderType } = this.props;
    return <GenderSelector setGenderType={setGenderType} />;
  }
}

GenderSelectorContainer.propTypes = {
  setGenderType: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({});

export const mapDispatchToProps = { setGenderType };

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(GenderSelectorContainer);
