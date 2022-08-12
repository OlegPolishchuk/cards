import { SET_NEW_PASSWORD } from 'store/actions/constants';
import { SetNewPasswordType } from 'store/actions/types';

export const setNewPasswordAC = (info: string): SetNewPasswordType => {
    return {
        type: SET_NEW_PASSWORD,
        payload: { info },
    };
};
