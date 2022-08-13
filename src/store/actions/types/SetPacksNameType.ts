import { SET_PACKS_NAME } from 'store/actions/constants';

export type SetPacksNameType = {
    type: typeof SET_PACKS_NAME;
    payload: { packName: string };
};
