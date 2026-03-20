import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NameContainer from '../NameContainer';
import { removeName, selectName } from '../../actions/names';
import './DualSelector.scss';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export class DualSelector extends Component {
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

export const mapStateToProps = state => ({
  firstName: state.names.firstName,
  secondName: state.names.secondName,
});

export const mapDispatchToProps = {
  removeName,
  selectName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(DualSelector);
