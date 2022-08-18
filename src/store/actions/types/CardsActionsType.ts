import { setCardsDataAC } from 'store/actions/setCardsDataAC';
import { setCardsPackIdAC } from 'store/actions/setCardsPackIdAC';
import { setCardsPageAC } from 'store/actions/setCardsPageAC';
import { setCardsPageCountAC } from 'store/actions/setCardsPageCountAC';
import { setCardsSearchParamsAC } from 'store/actions/setCardsSearchParamsAC';
import { setCardsTableDataAC } from 'store/actions/setCardsTableDataAC';
import { setSortCardAC } from 'store/actions/setSortCardAC';

export type CardsActionsType =
    | ReturnType<typeof setCardsDataAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardsPageAC>
    | ReturnType<typeof setCardsPageCountAC>
    | ReturnType<typeof setCardsTableDataAC>
    | ReturnType<typeof setSortCardAC>;
