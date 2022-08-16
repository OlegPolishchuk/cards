import { SET_CURRENT_PACK } from 'store/actions/constants';
import { PackType } from 'store/reducers/types';

export type SetCurrentPuckType = {
    type: typeof SET_CURRENT_PACK;
    payload: { pack: PackType };
};
