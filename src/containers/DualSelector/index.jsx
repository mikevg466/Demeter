import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DualSelector from '../../components/DualSelector';
import { removeName, selectName } from '../../actions/names';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export class DualSelectorContainer extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { firstName, removeName, secondName, selectName } = this.props;
    return (
      <DualSelector
        firstName={firstName}
        removeName={removeName}
        secondName={secondName}
        selectName={selectName}
      />
    );
  }
}

DualSelectorContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  removeName: PropTypes.func.isRequired,
  secondName: PropTypes.string.isRequired,
  selectName: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  firstName: state.names.firstName,
  secondName: state.names.secondName,
});

export const mapDispatchToProps = {
  removeName,
  selectName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(DualSelectorContainer);
