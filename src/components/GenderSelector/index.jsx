import { useDispatch } from 'react-redux';
import Constants from '../../utils/constants';
import { setGenderType } from '../../actions/names';
import './GenderSelector.scss';

export function GenderSelector() {
  const dispatch = useDispatch();

  return (
    <div className='gender-selector'>
      <span className='header-label'>Select Gender</span>
      <div className='selectors'>
        <div
          className='button boy'
          onClick={() => dispatch(setGenderType(Constants.GENDER_TYPES.MALE))}
        >
          Boy
        </div>
        <div className='divider' />
        <div
          className='button girl'
          onClick={() => dispatch(setGenderType(Constants.GENDER_TYPES.FEMALE))}
        >
          Girl
        </div>
      </div>
    </div>
  );
}

export default GenderSelector;
