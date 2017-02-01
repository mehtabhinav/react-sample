//Libraries
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';

//Reducers
import sampleContainerReducer from './reducers/sample-container-reducer';

const loggerMiddleware = createLogger();
const preloadedState = window.__PRELOADED_STATE__;

const reducers = combineReducers({
    preloadedState,
    sampleContainerReducer,
    routing: routerReducer
});

export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
}