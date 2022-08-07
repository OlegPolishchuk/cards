import { SET_USER_EMAIL_FOR_CHECK } from 'store/actions/constants';

export type SetUserEmailForCheckType = {
    type: typeof SET_USER_EMAIL_FOR_CHECK;
    payload: { userEmailFoCheck: string };
};
