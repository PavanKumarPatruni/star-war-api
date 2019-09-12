import { createStore } from 'redux';

import setupReducer  from './reducers';

const store = createStore(setupReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;