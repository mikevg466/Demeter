import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NameContainer.scss';

/**
 * Name Container for displaying a single name to choose with
 *  selection dispatchers for sort logic when clicked
 * @extends Component
 */
export default class NameContainer extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { handleClick, name } = this.props;
    return (
      <div className='name-container' onClick={handleClick}>
        <span>{name}</span>
      </div>
    );
  }
}

NameContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
