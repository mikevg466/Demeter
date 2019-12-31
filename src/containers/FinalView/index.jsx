import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadNames } from '../../actions/names';
import FinalView from '../../components/FinalView';

/**
 * Final View Container for showing the user the final list with all of the
 *  sorted selections after the finalList state is created.
 * @extends Component
 */
export class FinalViewContainer extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { finalList, genderType, loadNames } = this.props;
    return (
      <FinalView
        finalList={finalList}
        handleClick={() => loadNames(genderType)}
      />
    );
  }
}

FinalViewContainer.propTypes = {
  finalList: PropTypes.array.isRequired,
  genderType: PropTypes.string.isRequired,
  loadNames: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  finalList: state.names.finalList,
  genderType: state.names.genderType,
});

export const mapDispatchToProps = { loadNames };

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(FinalViewContainer);
