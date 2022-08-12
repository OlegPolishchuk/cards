import { SET_NEW_PASSWORD } from 'store/actions/constants';

export type SetNewPasswordType = {
    type: typeof SET_NEW_PASSWORD;
    payload: { info: string };
};
