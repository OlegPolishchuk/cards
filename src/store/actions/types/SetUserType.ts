import { AddedUserType } from 'api/types';
import { SET_USER } from 'store/actions/constants';

export type SetUserType = {
    type: typeof SET_USER;
    payload: AddedUserType;
};
