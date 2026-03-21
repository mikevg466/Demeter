import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { Provider } from 'react-redux';
import store from './store';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Provider store={store}>
        <HydratedRouter />
      </Provider>
    </StrictMode>
  );
});
