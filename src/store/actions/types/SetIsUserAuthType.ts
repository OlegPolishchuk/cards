import { SET_IS_USER_AUTH } from 'store/actions/constants';

export type SetIsUserAuthType = {
    type: typeof SET_IS_USER_AUTH;
    payload: {
        isUserAuth: boolean;
    };
};
