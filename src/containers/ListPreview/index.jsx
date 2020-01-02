import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePreviewName, initializeSortingList } from '../../actions/names';
import ListPreview from '../../components/ListPreview';

/**
 * List Preview Container for displaying all of the names before starting
 *  the sorting.  This will allow the user to delete names prior to sorting.
 * @extends Component
 */
export class ListPreviewContainer extends Component {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { deletePreviewName, initializeSortingList, rawList } = this.props;
    return (
      <ListPreview
        deletePreviewName={deletePreviewName}
        initializeSortingList={initializeSortingList}
        rawList={rawList}
      />
    );
  }
}

ListPreviewContainer.propTypes = {
  deletePreviewName: PropTypes.func.isRequired,
  initializeSortingList: PropTypes.func.isRequired,
  rawList: PropTypes.array.isRequired,
};

export const mapStateToProps = state => ({
  rawList: state.names.rawList,
});

export const mapDispatchToProps = { deletePreviewName, initializeSortingList };

export default connect(
  mapStateToProps,
  mapDispatchToProps //eslint-disable-line
)(ListPreviewContainer);
