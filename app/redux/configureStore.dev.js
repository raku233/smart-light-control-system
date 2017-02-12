import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import devTools from './devTools';

const sagaMiddleware = createSagaMiddleware();

const enhancedCreateStore = compose(
    applyMiddleware(
        routerMiddleware(browserHistory),
        sagaMiddleware
    ),
    devTools.instrument()
)(createStore);

const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer
});

export default function configureStore(initialState) {
    const store = enhancedCreateStore(reducer, initialState);
    sagaMiddleware.run(rootSaga);

    return store;
}