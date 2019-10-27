import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './Root.scss';

/**
 * Root React Component containing the presentational Root
 * @extends PureComponent
 */
export default class RootComponent extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { greeting, name, setName } = this.props;
    return (
      <div className='root'>
        <header className='header'>
          <img alt='logo' className='logo' src={logo} />
          <p>
            {`${greeting} `}
            <input onChange={e => setName(e.target.value)} value={name} />
            {'!'}
          </p>
          <a
            className='link'
            href='https://reactjs.org'
            rel='noopener noreferrer'
            target='_blank'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

RootComponent.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
  setName: PropTypes.func.isRequired,
};
