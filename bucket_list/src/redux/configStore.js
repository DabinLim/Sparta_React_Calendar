import {createStore, combineReducers, applyMiddleware} from 'redux';
import bucket from './modules/bucket';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

export const history = createBrowserHistory();

const rootReducer = combineReducers({bucket});

const store = createStore(rootReducer, enhancer);

export default store;