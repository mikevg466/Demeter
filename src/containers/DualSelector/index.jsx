import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectorNames } from '../../actions/names';
import DualSelector from '../../components/DualSelector';

/**
 * Selector Container For showing a user two options for selection
 * @extends Component
 */
export class DualSelectorContainer extends Component {
  /**
   * React componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
    const { setSelectorNames } = this.props;
    setSelectorNames();
  }

  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { firstName, secondName } = this.props;
    return <DualSelector firstName={firstName} secondName={secondName} />;
  }
}

DualSelectorContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  setSelectorNames: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  firstName: state.names.firstName,
  secondName: state.names.secondName,
});

// eslint-disable-next-line
export const mapDispatchToProps = ({ setSelectorNames });

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(DualSelectorContainer);
