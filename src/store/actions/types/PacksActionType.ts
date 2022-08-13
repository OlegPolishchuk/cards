import { setPacksAC } from 'store/actions/setPacksAC';
import { setPacksNameAC } from 'store/actions/setPacksNameAC';
import { setPacksSearchParamsAC } from 'store/actions/setPacksSearchParamsAC';

export type PacksActionType =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setPacksSearchParamsAC>
    | ReturnType<typeof setPacksNameAC>;
