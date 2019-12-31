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
    const { name, removeName, selectName } = this.props;
    return (
      <div className='name-container'>
        <div className='name' onClick={selectName}>
          {name}
        </div>
        <div className='remove-icon' onClick={removeName}>
          {'X'}
        </div>
      </div>
    );
  }
}

NameContainer.propTypes = {
  name: PropTypes.string.isRequired,
  removeName: PropTypes.func.isRequired,
  selectName: PropTypes.func.isRequired,
};
