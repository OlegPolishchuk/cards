import { SET_PACKS } from 'store/actions/constants';
import { PackType } from 'store/reducers/types/PackType';

export type SetPacksType = {
    type: typeof SET_PACKS;
    payload: { packs: PackType[] };
};
