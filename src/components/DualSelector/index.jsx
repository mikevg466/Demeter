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
    const { firstName, removeName, secondName, selectName } = this.props;
    return (
      <div className='dual-selector'>
        <NameContainer
          name={firstName}
          removeName={() => removeName(-1)}
          selectName={() => selectName(-1)}
        />
        <span className='vs-block'>VS</span>
        <NameContainer
          name={secondName}
          removeName={() => removeName(1)}
          selectName={() => selectName(1)}
        />
      </div>
    );
  }
}

DualSelector.propTypes = {
  firstName: PropTypes.string.isRequired,
  removeName: PropTypes.func.isRequired,
  secondName: PropTypes.string.isRequired,
  selectName: PropTypes.func.isRequired,
};
