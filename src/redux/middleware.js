import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';

const thunk = ({dispatch, getState}) => next => action => {
    typeof action === 'function' ? action({dispatch, getState}) : next(action);
}

export const middlewares = composeWithDevTools(applyMiddleware(
    logger,
    thunk
))