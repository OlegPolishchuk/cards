import { SET_IS_PASSWORD_CHANGED } from 'store/actions/constants';
import { SetIsPasswordChangedType } from 'store/actions/types';

export const setIsPasswordChangedAC = (
    isPasswordChanged: boolean,
): SetIsPasswordChangedType => {
    return {
        type: SET_IS_PASSWORD_CHANGED,
        payload: { isPasswordChanged },
    };
};
