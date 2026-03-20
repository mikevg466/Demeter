import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadNames,
  setGenderType,
  setSelectorNames,
} from '../../actions/names';
import GenderSelector from '../GenderSelector';
import DualSelector from '../DualSelector';
import FinalView from '../FinalView';
import ListPreview from '../ListPreview';
import Loader from '../Loader';
import Logo from '../Icons/Baby';
import Constants from '../../utils/constants';
import './Root.scss';

/**
 * Root React Component containing the presentational Root
 * @extends Component
 */
export class Root extends Component {
  /**
   * React componentDidUpdate
   * @param  {Object} prevProps previous component props
   */
  componentDidUpdate(prevProps) {
    const { genderType, loadNames, setSelectorNames, sortingList } = this.props;
    const {
      genderType: prevGenderType,
      sortingList: prevSortingList,
    } = prevProps;

    if (sortingList !== prevSortingList) {
      setSelectorNames();
    }

    if (genderType !== prevGenderType) {
      loadNames(genderType);
    }
  }

  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const {
      displayListPreview,
      genderType,
      isLoading,
      isSortingFinished,
      setGenderType,
    } = this.props;
    const isGenderSelected = !!genderType;

    const {
      GENDER_TYPES: { MALE, FEMALE },
    } = Constants;
    const genderClassName =
      genderType === MALE ? 'boy' : genderType === FEMALE ? 'girl' : '';

    return (
      <div className={`root ${genderClassName}`}>
        <header className='header'>
          <div
            className={`back-arrow ${isGenderSelected ? '' : 'hidden'}`}
            onClick={() => setGenderType('')}
          >
            {'<'}
          </div>
          <div className='logo-container'>
            <div className='logo'>
              <Logo />
            </div>
          </div>
        </header>
        <div className='body'>
          {!isGenderSelected ? (
            <GenderSelector />
          ) : isLoading ? (
            <Loader />
          ) : isSortingFinished ? (
            <FinalView />
          ) : displayListPreview ? (
            <ListPreview />
          ) : (
            <DualSelector />
          )}
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  displayListPreview: PropTypes.bool.isRequired,
  genderType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSortingFinished: PropTypes.bool.isRequired,
  loadNames: PropTypes.func.isRequired,
  initialRawList: PropTypes.array.isRequired,
  rawList: PropTypes.array.isRequired,
  setGenderType: PropTypes.func.isRequired,
  setSelectorNames: PropTypes.func.isRequired,
  sortingList: PropTypes.array.isRequired,
};

export const mapStateToProps = state => {
  const {
    genderType,
    isSortingFinished,
    initialRawList,
    rawList,
    sortingList,
  } = state.names;
  const isLoading = !(initialRawList.length || rawList.length);
  const displayListPreview = !sortingList.length;
  return {
    displayListPreview,
    genderType,
    isLoading,
    isSortingFinished,
    initialRawList,
    rawList,
    sortingList,
  };
};

export const mapDispatchToProps = {
  loadNames,
  setGenderType,
  setSelectorNames,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(Root);
