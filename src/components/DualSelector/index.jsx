import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NameContainer from '../NameContainer';
import './DualSelector.scss';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export default class DualSelector extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { firstName, secondName } = this.props;
    return (
      <div className='dual-selector'>
        <NameContainer name={firstName} />
        <span className='vs-block'>VS</span>
        <NameContainer name={secondName} />
      </div>
    );
  }
}

DualSelector.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
};
