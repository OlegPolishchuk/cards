import { SET_IS_EMAIL_SEND } from 'store/actions/constants';
import { IsEmailSendType } from 'store/actions/types/IsEmailSendType';

export const setIsEmailSendAC = (isEmailSend: boolean): IsEmailSendType => {
    return {
        type: SET_IS_EMAIL_SEND,
        payload: { isEmailSend },
    };
};
