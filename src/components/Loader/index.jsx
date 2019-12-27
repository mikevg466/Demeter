import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.svg';
import './Loader.scss';

/**
 * Name Container for displaying a single name to choose with
 *  selection dispatchers for sort logic when clicked
 * @extends Component
 */
export default class Loader extends PureComponent {
  /**
   * React renderer
   * @return {JSX}
   */
  render() {
    return (
      <div className='loader'>
        <img alt='loading...' src={logo} />
      </div>
    );
  }
}
