import logo from '../../assets/images/logo.svg';
import './Loader.scss';

export default function Loader() {
  return (
    <div className='loader'>
      <img alt='loading...' src={logo} />
    </div>
  );
}
