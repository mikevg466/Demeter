import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadNames } from '../../actions/names';
import './FinalView.scss';

/**
 * Final View Container for showing the user the final list with all of the
 *  sorted selections after the finalList state is created.
 * @extends Component
 */
export class FinalView extends Component {
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

export const mapStateToProps = state => ({
  finalList: state.names.finalList,
  genderType: state.names.genderType,
});

export const mapDispatchToProps = { loadNames };

export default connect(
  mapStateToProps,
  mapDispatchToProps, //eslint-disable-line
  ({ finalList, genderType }, { loadNames }) => ({
    finalList,
    handleClick: () => loadNames(genderType),
  }),
)(FinalView);
