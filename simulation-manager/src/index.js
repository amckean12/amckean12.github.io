import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index.js';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined, composeEnhancer())

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

