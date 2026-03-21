import { useSelector, useDispatch } from 'react-redux';
import NameContainer from '../NameContainer';
import { removeName, selectName } from '../../actions/names';
import './DualSelector.scss';

export function DualSelector() {
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.names.firstName);
  const secondName = useSelector(state => state.names.secondName);

  return (
    <div className='dual-selector'>
      <NameContainer
        name={firstName}
        removeName={() => dispatch(removeName(-1))}
        selectName={() => dispatch(selectName(-1))}
      />
      <span className='vs-block'>VS</span>
      <NameContainer
        name={secondName}
        removeName={() => dispatch(removeName(1))}
        selectName={() => dispatch(selectName(1))}
      />
    </div>
  );
}

export default DualSelector;
