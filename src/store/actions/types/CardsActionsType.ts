import { setCardsDataAC } from 'store/actions/setCardsDataAC';
import { setCardsPackIdAC } from 'store/actions/setCardsPackIdAC';
import { setCardsSearchParamsAC } from 'store/actions/setCardsSearchParamsAC';

export type CardsActionsType =
    | ReturnType<typeof setCardsDataAC>
    | ReturnType<typeof setCardsPackIdAC>
    | ReturnType<typeof setCardsSearchParamsAC>;
