import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './app/store.js'
import App, { directionFilters } from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


