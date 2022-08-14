import { SET_PACKS_USER_ID } from 'store/actions/constants';

export type SetPacksUserIdType = {
    type: typeof SET_PACKS_USER_ID;
    payload: { userId: string };
};
