import { AddedUserType } from 'api/types';
import { SET_USER } from 'store/actions/constants';
import { SetUserType } from 'store/actions/types/SetUserType';

export const setUser = (user: AddedUserType): SetUserType => {
    return {
        type: SET_USER,
        payload: { ...user },
    } as const;
};
