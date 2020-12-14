import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CustomNameInput from '../../containers/CustomNameInput';
import './ListPreview.scss';

/**
 * List Preview Container for displaying all of the names before starting
 *  the sorting.  This will allow the user to delete names prior to sorting.
 * @extends Component
 */
export default class ListPreview extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    const { deletePreviewName, initializeSortingList, rawList } = this.props;
    return (
      <div className='list-preview'>
        <CustomNameInput />
        <span onClick={initializeSortingList}>Start</span>
        <ol>
          {rawList.map((name, index) => (
            <li key={name}>
              <span className='name'>{name}</span>
              <span
                className='delete-button'
                onClick={() => deletePreviewName(index)}
              >
                {'X'}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ListPreview.propTypes = {
  deletePreviewName: PropTypes.func.isRequired,
  initializeSortingList: PropTypes.func.isRequired,
  rawList: PropTypes.array.isRequired,
};
