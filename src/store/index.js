import configureProduction from './configureProduction';
import configureDevelop from './configureDevelop';

let store;
if (process.env.NODE_ENV === 'production') {
  store = configureProduction();
} else {
  store = configureDevelop();
}

export default store;
