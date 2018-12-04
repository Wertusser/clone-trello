import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ReduxThunk)
));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

export default App;