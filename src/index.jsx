import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {App, AppContainer} from './components/App'
import reducer from './reducer';


const store = createStore(reducer)

var $ = require('jquery');
// require('../node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot');
// require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


// store.subscribe(reducer);
