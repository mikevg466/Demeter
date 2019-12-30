import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.svg';
import './Loader.scss';

/**
 * Loader Container for displaying a spinning loader icon
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
