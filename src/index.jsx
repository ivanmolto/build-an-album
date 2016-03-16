import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {App, AppContainer} from './components/App'
import reducer from './reducer';


const store = createStore(reducer)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);


// store.subscribe(reducer);
