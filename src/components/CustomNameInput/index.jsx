import { useSelector, useDispatch } from 'react-redux';
import { addCustomName, setCustomName } from '../../actions/names';
import './CustomNameInput.scss';

export function CustomNameInput() {
  const dispatch = useDispatch();
  const customName = useSelector(state => state.names.customName);

  return (
    <div className='custom-name-input'>
      <input
        className='input'
        onChange={({ target: { value } }) => dispatch(setCustomName(value))}
        type='text'
        value={customName}
      />
      <div className='button' onClick={() => dispatch(addCustomName())}>
        ADD
      </div>
    </div>
  );
}

export default CustomNameInput;
