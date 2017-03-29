import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import configureStore from './redux/configureStore';
import routes from './routes/index';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const container = document.body.appendChild(
    document.createElement('div')
);

render((
    <Provider store={store}>
        {routes(history)}
    </Provider>
), container);