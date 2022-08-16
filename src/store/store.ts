import { devToolsEnhancer } from '@redux-devtools/extension';
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer, authReducer, cardsReducer, packReducer } from 'store/reducers';

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    packs: packReducer,
    cards: cardsReducer,
});

export const store = createStore(rootReducer, undefined, composedEnhancers);
