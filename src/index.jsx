import { createRoot } from 'react-dom/client';
import Root from './components/Root';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Constants from './utils/constants';
import './stylesheets/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className={Constants.PROJECT_NAME}>
      <Root />
    </div>
  </Provider>
);

serviceWorker.unregister();
