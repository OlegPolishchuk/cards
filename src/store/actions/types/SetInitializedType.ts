import { SET_INITIALIZED } from 'store/actions/constants';

export type SetInitializedType = {
    type: typeof SET_INITIALIZED;
    payload: { isInitialized: boolean };
};
