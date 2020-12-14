import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CustomNameInput.scss';

/**
 * Selector Container For showing a user two options for selection
 * @extends PureComponent
 */
export default class CustomNameInput extends PureComponent {
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
