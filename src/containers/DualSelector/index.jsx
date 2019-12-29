import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DualSelector from '../../components/DualSelector';
import { selectName } from '../../actions/names';

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
    const { firstName, secondName, selectName } = this.props;
    return (
      <DualSelector
        firstName={firstName}
        handleClick={selectName}
        secondName={secondName}
      />
    );
  }
}

DualSelectorContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  selectName: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  firstName: state.names.firstName,
  secondName: state.names.secondName,
});

export const mapDispatchToProps = {
  selectName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(DualSelectorContainer);
