import { SET_CURRENT_PACK } from 'store/actions/constants';
import { SetCurrentPuckType } from 'store/actions/types';
import { PackType } from 'store/reducers/types';

export const setCurrentPuckAC = (pack: PackType): SetCurrentPuckType => {
    return {
        type: SET_CURRENT_PACK,
        payload: { pack },
    };
};
