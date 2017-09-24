'use strict';

import './style.css';
import * as actions from './actions';
import {Provider, connect} from 'react-redux';
import {bindActionCreators, createStore} from 'redux';
import Board from './components/Board';
import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './reducers';

function configureStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

function mapStateToProps(state) {
  return {
    knightX: state.position.knightX,
    knightY: state.position.knightY
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
