import { REQUEST_STATUS } from 'enums';
import { SET_APP_STATUS } from 'store/actions/constants';
import { SetStatusACType } from 'store/actions/types/SetStatusAC';

export const setStatusAC = (status: REQUEST_STATUS): SetStatusACType => {
    return {
        type: SET_APP_STATUS,
        payload: { status },
    } as const;
};
