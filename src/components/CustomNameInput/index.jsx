import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomName, setCustomName } from '../../actions/names';
import './CustomNameInput.scss';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export class CustomNameInput extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { addCustomName, customName, setCustomName } = this.props;
    return (
      <div className='custom-name-input'>
        <input
          className='input'
          onChange={({ target: { value } }) => setCustomName(value)}
          type='text'
          value={customName}
        />
        <div className='button' onClick={addCustomName}>
          ADD
        </div>
      </div>
    );
  }
}

CustomNameInput.propTypes = {
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
)(CustomNameInput);
