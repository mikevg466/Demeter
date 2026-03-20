import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomNameInput from '../CustomNameInput';
import {
  addInitialName,
  removeInitialName,
  initializeSortingList,
} from '../../actions/names';
import './ListPreview.scss';

/**
 * List Preview Container for displaying all of the names before starting
 *  the sorting.  This will allow the user to delete names prior to sorting.
 * @extends Component
 */
export class ListPreview extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const {
      addInitialName,
      removeInitialName,
      initializeSortingList,
      initialRawList,
      rawList,
    } = this.props;
    return (
      <div className='list-preview'>
        <span onClick={initializeSortingList}>Start</span>
        <CustomNameInput />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <span style={{
              fontSize: '22px',
              fontWeight: '900',
              color: '#2196F3',
              textDecoration: 'underline',
            }}>
              Preview
            </span>
            <ol>
              {initialRawList.map((name, index) => (
                <li key={name}>
                  <span
                    className='name' onClick={() => addInitialName(index)}
                  >{name}</span>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ width: '1px', borderLeft: '1px solid grey' }}/>
          <div>
            <span style={{
              fontSize: '22px',
              fontWeight: '900',
              color: '#2196F3',
              textDecoration: 'underline',
            }}>
              Names
            </span>
            <ol>
              {rawList.map((name, index) => (
                <li key={name}>
                  <span
                    className='name' onClick={() => removeInitialName(index)}
                  >{name}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

ListPreview.propTypes = {
  addInitialName: PropTypes.func.isRequired,
  initializeSortingList: PropTypes.func.isRequired,
  initialRawList: PropTypes.array.isRequired,
  rawList: PropTypes.array.isRequired,
  removeInitialName: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  initialRawList: state.names.initialRawList,
  rawList: state.names.rawList,
});

export const mapDispatchToProps = {
  addInitialName,
  removeInitialName,
  initializeSortingList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(ListPreview);
