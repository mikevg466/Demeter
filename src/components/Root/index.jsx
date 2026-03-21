import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadNames,
  setGenderType,
  setSelectorNames,
} from '../../actions/names';
import GenderSelector from '../GenderSelector';
import DualSelector from '../DualSelector';
import FinalView from '../FinalView';
import ListPreview from '../ListPreview';
import Loader from '../Loader';
import Logo from '../Icons/Baby';
import Constants from '../../utils/constants';
import './Root.scss';

export function Root() {
  const dispatch = useDispatch();
  const genderType = useSelector(state => state.names.genderType);
  const isSortingFinished = useSelector(state => state.names.isSortingFinished);
  const initialRawList = useSelector(state => state.names.initialRawList);
  const rawList = useSelector(state => state.names.rawList);
  const sortingList = useSelector(state => state.names.sortingList);

  const isLoading = !(initialRawList.length || rawList.length);
  const displayListPreview = !sortingList.length;

  const sortingListMounted = useRef(false);
  const genderTypeMounted = useRef(false);

  useEffect(() => {
    if (!sortingListMounted.current) {
      sortingListMounted.current = true;
      return;
    }
    dispatch(setSelectorNames());
  }, [sortingList]); // eslint-disable-line

  useEffect(() => {
    if (!genderTypeMounted.current) {
      genderTypeMounted.current = true;
      return;
    }
    dispatch(loadNames(genderType));
  }, [genderType]); // eslint-disable-line

  const isGenderSelected = !!genderType;
  const {
    GENDER_TYPES: { MALE, FEMALE },
  } = Constants;
  const genderClassName =
    genderType === MALE ? 'boy' : genderType === FEMALE ? 'girl' : '';

  return (
    <div className={`root ${genderClassName}`}>
      <header className='header'>
        <div
          className={`back-arrow ${isGenderSelected ? '' : 'hidden'}`}
          onClick={() => dispatch(setGenderType(''))}
        >
          {'<'}
        </div>
        <div className='logo-container'>
          <div className='logo'>
            <Logo />
          </div>
        </div>
      </header>
      <div className='body'>
        {!isGenderSelected ? (
          <GenderSelector />
        ) : isLoading ? (
          <Loader />
        ) : isSortingFinished ? (
          <FinalView />
        ) : displayListPreview ? (
          <ListPreview />
        ) : (
          <DualSelector />
        )}
      </div>
    </div>
  );
}

export default Root;
