import { setPacksAC } from 'store/actions/setPacksAC';
import { setPacksNameAC } from 'store/actions/setPacksNameAC';
import { setPacksSearchParamsAC } from 'store/actions/setPacksSearchParamsAC';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';

export type PacksActionType =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setPacksSearchParamsAC>
    | ReturnType<typeof setPacksNameAC>
    | ReturnType<typeof setPacksTableDataAC>;
