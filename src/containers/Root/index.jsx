import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadNames,
  setGenderType,
  setSelectorNames,
} from '../../actions/names';
import Root from '../../components/Root';

/**
 * Root React Container to be initialized in the main index.js file
 * @extends Component
 */
export class RootContainer extends Component {
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
      genderType,
      isSortingFinished,
      rawList,
      setGenderType,
      sortingList,
    } = this.props;
    const isLoading = !rawList.length;
    const displayListPreview = !sortingList.length;

    return (
      <Root
        displayListPreview={displayListPreview}
        genderType={genderType}
        isLoading={isLoading}
        isSortingFinished={isSortingFinished}
        setGenderType={setGenderType}
      />
    );
  }
}

RootContainer.propTypes = {
  genderType: PropTypes.string.isRequired,
  isSortingFinished: PropTypes.bool.isRequired,
  loadNames: PropTypes.func.isRequired,
  rawList: PropTypes.array.isRequired,
  setGenderType: PropTypes.func.isRequired,
  setSelectorNames: PropTypes.func.isRequired,
  sortingList: PropTypes.array.isRequired,
};

export const mapStateToProps = state => ({
  genderType: state.names.genderType,
  isSortingFinished: state.names.isSortingFinished,
  rawList: state.names.rawList,
  sortingList: state.names.sortingList,
});

export const mapDispatchToProps = {
  loadNames,
  setGenderType,
  setSelectorNames,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(RootContainer);
