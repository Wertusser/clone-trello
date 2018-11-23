import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore } from './utils/devTools';
import * as reducers from './reducers';
import Board from './components/Board';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Board />
        </Provider>
      </div>
    );
  }
}
