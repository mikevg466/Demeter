import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setName } from '../../actions/user';
import Root from '../../components/Root';

/**
 * Root React Container to be initialized in the main index.js file
 * @extends Component
 */
export class RootContainer extends Component {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { name, greeting, setName } = this.props;
    return <Root greeting={greeting} name={name} setName={setName} />;
  }
}

RootContainer.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
  setName: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  name: state.user.name,
  greeting: state.user.greeting,
});

export const mapDispatchToProps = {
  setName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
