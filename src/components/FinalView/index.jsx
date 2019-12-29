import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './FinalView.scss';

/**
 * Name Container for displaying a single name to choose with
 *  selection dispatchers for sort logic when clicked
 * @extends Component
 */
export default class FinalView extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { finalList, handleClick } = this.props;
    return (
      <div className='final-view'>
        <span onClick={handleClick}>Reset</span>
        <ol>
          {finalList.map(name => (
            <li>{name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

FinalView.propTypes = {
  finalList: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
