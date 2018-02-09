import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
      <div>
          {console.log('CLIENT')}
          <App />
      </div>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
