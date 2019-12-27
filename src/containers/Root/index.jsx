import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadNames } from '../../actions/names';
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
  loadNames: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isLoading: !state.names.list.length,
});

export const mapDispatchToProps = {
  loadNames,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(RootContainer);
