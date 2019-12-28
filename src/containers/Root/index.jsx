import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initializeSortingList, loadNames } from '../../actions/names';
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
    const { initializeSortingList, rawList } = this.props;
    const { rawList: prevRawList } = prevProps;
    if (rawList !== prevRawList) {
      initializeSortingList();
    }
  }

  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { isLoading } = this.props;
    console.log(isLoading);
    return <Root isLoading={isLoading} />;
  }
}

RootContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  initializeSortingList: PropTypes.func.isRequired,
  loadNames: PropTypes.func.isRequired,
  rawList: PropTypes.array.isRequired,
};

export const mapStateToProps = state => ({
  isLoading: !state.names.rawList.length,
  rawList: state.names.rawList,
});

export const mapDispatchToProps = {
  initializeSortingList,
  loadNames,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(RootContainer);
