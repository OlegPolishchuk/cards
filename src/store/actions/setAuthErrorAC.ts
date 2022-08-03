import { SET_AUTH_ERROR } from 'store/actions/constants';
import { SetAuthErrorType } from 'store/actions/types/SetAuthErrorType';

export const setAuthErrorAC = (error: string | null): SetAuthErrorType => {
    return {
        type: SET_AUTH_ERROR,
        payload: { error },
    } as const;
};
