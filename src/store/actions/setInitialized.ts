import { SET_INITIALIZED } from 'store/actions/constants';
import { SetInitializedType } from 'store/actions/types';

export const setInitializedAC = (isInitialized: boolean): SetInitializedType => {
    return {
        type: SET_INITIALIZED,
        payload: { isInitialized },
    };
};
