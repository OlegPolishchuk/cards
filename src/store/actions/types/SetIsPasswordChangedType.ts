import { SET_IS_PASSWORD_CHANGED } from 'store/actions/constants';

export type SetIsPasswordChangedType = {
    type: typeof SET_IS_PASSWORD_CHANGED;
    payload: { isPasswordChanged: boolean };
};
