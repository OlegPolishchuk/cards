import { SET_AUTH_ERROR } from 'store/actions/constants';

export type SetAuthErrorType = {
    type: typeof SET_AUTH_ERROR;
    payload: { error: string | null };
};
