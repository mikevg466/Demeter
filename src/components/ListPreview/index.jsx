import { useSelector, useDispatch } from 'react-redux';
import CustomNameInput from '../CustomNameInput';
import {
  addInitialName,
  removeInitialName,
  initializeSortingList,
} from '../../actions/names';
import './ListPreview.scss';

export function ListPreview() {
  const dispatch = useDispatch();
  const initialRawList = useSelector(state => state.names.initialRawList);
  const rawList = useSelector(state => state.names.rawList);

  return (
    <div className='list-preview'>
      <span onClick={() => dispatch(initializeSortingList())}>Start</span>
      <CustomNameInput />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          width: '100%',
        }}
      >
        <div>
          <span style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#2196F3',
            textDecoration: 'underline',
          }}>
            Preview
          </span>
          <ol>
            {initialRawList.map((name, index) => (
              <li key={name}>
                <span
                  className='name' onClick={() => dispatch(addInitialName(index))}
                >{name}</span>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ width: '1px', borderLeft: '1px solid grey' }}/>
        <div>
          <span style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#2196F3',
            textDecoration: 'underline',
          }}>
            Names
          </span>
          <ol>
            {rawList.map((name, index) => (
              <li key={name}>
                <span
                  className='name' onClick={() => dispatch(removeInitialName(index))}
                >{name}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ListPreview;
