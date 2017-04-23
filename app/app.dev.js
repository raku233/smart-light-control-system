import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { bindCheckAuth } from './redux/authTools';

import configureStore from './redux/configureStore';
import routes from './routes/index';
import DevTools from './redux/devTools';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const checkAccess = bindCheckAuth(store);

const container = document.body.appendChild(
    document.createElement('div')
);

render((
    <Provider store={store}>
        <div>
            {routes(history, checkAccess)}
            <DevTools />
        </div>
    </Provider>
), container);