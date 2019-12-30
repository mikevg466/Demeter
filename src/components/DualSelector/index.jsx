import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NameContainer from '../NameContainer';
import './DualSelector.scss';

/**
 * Selector Container For showing a user two options for selection
 * @extends PureComponent
 */
export default class DualSelector extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { firstName, handleClick, secondName } = this.props;
    return (
      <div className='dual-selector'>
        <NameContainer handleClick={() => handleClick(-1)} name={firstName} />
        <span className='vs-block'>VS</span>
        <NameContainer handleClick={() => handleClick(1)} name={secondName} />
      </div>
    );
  }
}

DualSelector.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  secondName: PropTypes.string.isRequired,
};
