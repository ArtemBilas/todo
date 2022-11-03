import {createStore} from 'redux';
import reducers from './reducers';
import {middlewares} from './middleware';
import {saveState, throttle} from '../utils';

export const store = createStore(reducers, middlewares);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos,
    });
}));