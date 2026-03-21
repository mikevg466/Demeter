import PropTypes from 'prop-types';
import './NameContainer.scss';

export default function NameContainer({ name, removeName, selectName }) {
  return (
    <div className='name-container'>
      <div className='name' onClick={selectName}>
        {name}
      </div>
      <div className='remove-icon' onClick={removeName}>
        {'X'}
      </div>
    </div>
  );
}

NameContainer.propTypes = {
  name: PropTypes.string.isRequired,
  removeName: PropTypes.func.isRequired,
  selectName: PropTypes.func.isRequired,
};
