import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  initializeSortingList,
  loadNames,
  setSelectorNames,
} from '../../actions/names';
import Root from '../../components/Root';

/**
 * Root React Container to be initialized in the main index.js file
 * @extends Component
 */
export class RootContainer extends Component {
  /**
   * React componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    const { loadNames } = this.props;
    loadNames();
  }

  /**
   * React componentDidUpdate
   * @param  {Object} prevProps previous component props
   */
  componentDidUpdate(prevProps) {
    const {
      initializeSortingList,
      rawList,
      setSelectorNames,
      sortingList,
    } = this.props;
    const { rawList: prevRawList, sortingList: prevSortingList } = prevProps;
    if (rawList !== prevRawList) {
      initializeSortingList();
    }

    if (sortingList !== prevSortingList) {
      setSelectorNames();
    }
  }

  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { isLoading, isSortingFinished } = this.props;
    return <Root isLoading={isLoading} isSortingFinished={isSortingFinished} />;
  }
}

RootContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSortingFinished: PropTypes.bool.isRequired,
  initializeSortingList: PropTypes.func.isRequired,
  loadNames: PropTypes.func.isRequired,
  rawList: PropTypes.array.isRequired,
  setSelectorNames: PropTypes.func.isRequired,
  sortingList: PropTypes.array.isRequired,
};

export const mapStateToProps = state => ({
  isLoading: !state.names.rawList.length,
  isSortingFinished: state.names.isSortingFinished,
  rawList: state.names.rawList,
  sortingList: state.names.sortingList,
});

export const mapDispatchToProps = {
  initializeSortingList,
  loadNames,
  setSelectorNames,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(RootContainer);
