import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import configureStore from './store';

import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
   <App />
  </Provider>,
  document.getElementById('root')
 );

serviceWorker.unregister();
