//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {Provider} from 'react-redux';
import routes from './routes/routes';

// Redux
import configureStore from './store/configure-store';
const store = (window.__REDUX_STATE__) ? configureStore(JSON.parse(window.__REDUX_STATE__)) : configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
    , document.querySelector('#app')
);