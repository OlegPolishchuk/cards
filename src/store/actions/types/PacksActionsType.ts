import { setCardPacksTotalCountAC } from 'store/actions/setCardPacksTotalCountAC';
import { setCurrentPuckAC } from 'store/actions/setCurrentPuckAC';
import { setMaxCardsCountAC } from 'store/actions/setMaxCardsCountAC';
import { setMinCardsCountAC } from 'store/actions/setMinCardsCountAC';
import { setPacksAC } from 'store/actions/setPacksAC';
import { setPacksNameAC } from 'store/actions/setPacksNameAC';
import { setPacksPageAC } from 'store/actions/setPacksPageAC';
import { setPacksPageCountAC } from 'store/actions/setPacksPageCountAC';
import { setPacksSearchParamsAC } from 'store/actions/setPacksSearchParamsAC';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';
import { setPacksUserIdAC } from 'store/actions/setPacksUserID';
import { setSortPacksAC } from 'store/actions/setSortPacksAC';

export type PacksActionsType =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setPacksSearchParamsAC>
    | ReturnType<typeof setPacksNameAC>
    | ReturnType<typeof setPacksTableDataAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setPacksUserIdAC>
    | ReturnType<typeof setMinCardsCountAC>
    | ReturnType<typeof setMaxCardsCountAC>
    | ReturnType<typeof setCardPacksTotalCountAC>
    | ReturnType<typeof setPacksPageAC>
    | ReturnType<typeof setCurrentPuckAC>
    | ReturnType<typeof setPacksPageCountAC>;
