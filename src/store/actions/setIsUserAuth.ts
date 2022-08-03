import { SET_IS_USER_AUTH } from 'store/actions/constants';
import { SetIsUserAuthType } from 'store/actions/types';

export const setIsUserAuth = (isUserAuth: boolean): SetIsUserAuthType => {
    return {
        type: SET_IS_USER_AUTH,
        payload: { isUserAuth },
    };
};
