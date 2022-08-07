import { SET_USER_EMAIL_FOR_CHECK } from 'store/actions/constants';
import { SetUserEmailForCheckType } from 'store/actions/types';

export const setUserEmailForCheckAC = (
    userEmailFoCheck: string,
): SetUserEmailForCheckType => {
    return {
        type: SET_USER_EMAIL_FOR_CHECK,
        payload: { userEmailFoCheck },
    };
};
