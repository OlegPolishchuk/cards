import { SET_IS_EMAIL_SEND } from 'store/actions/constants';

export type IsEmailSendType = {
    type: typeof SET_IS_EMAIL_SEND;
    payload: { isEmailSend: boolean };
};
