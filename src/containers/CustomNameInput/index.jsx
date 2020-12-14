import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomNameInput from '../../components/CustomNameInput';
import { addCustomName, setCustomName } from '../../actions/names';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export class CustomNameContainer extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { addCustomName, customName, setCustomName } = this.props;
    return (
      <CustomNameInput
        addCustomName={addCustomName}
        customName={customName}
        setCustomName={setCustomName}
      />
    );
  }
}

CustomNameContainer.propTypes = {
  addCustomName: PropTypes.func.isRequired,
  customName: PropTypes.string.isRequired,
  setCustomName: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  customName: state.names.customName,
});

export const mapDispatchToProps = {
  addCustomName,
  setCustomName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(CustomNameContainer);
