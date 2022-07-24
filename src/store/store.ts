import { devToolsEnhancer } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, undefined, composedEnhancers);
