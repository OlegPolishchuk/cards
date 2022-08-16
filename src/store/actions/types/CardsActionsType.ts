import { setCardsDataAC } from 'store/actions/setCardsDataAC';
import { setCardsPackIdAC } from 'store/actions/setCardsPackIdAC';
import { setCardsPageAC } from 'store/actions/setCardsPageAC';
import { setCardsSearchParamsAC } from 'store/actions/setCardsSearchParamsAC';

export type CardsActionsType =
    | ReturnType<typeof setCardsDataAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>
    | ReturnType<typeof setCardsPageAC>;
