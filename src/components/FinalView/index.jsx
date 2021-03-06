import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './FinalView.scss';

/**
 * Final View Container for showing the user the final list with all of the
 *  sorted selections after the finalList state is created.
 * @extends PureComponent
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
            <li key={name}>{name}</li>
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
