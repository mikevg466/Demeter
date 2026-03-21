import { useSelector, useDispatch } from 'react-redux';
import { loadNames } from '../../actions/names';
import './FinalView.scss';

export function FinalView() {
  const dispatch = useDispatch();
  const finalList = useSelector(state => state.names.finalList);
  const genderType = useSelector(state => state.names.genderType);

  return (
    <div className='final-view'>
      <span onClick={() => dispatch(loadNames(genderType))}>Reset</span>
      <ol>
        {finalList.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default FinalView;
