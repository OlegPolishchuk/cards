import { AxiosError } from 'axios';

import { cardsAPI } from 'api/cards/cardsAPI';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { setCardsDataAC } from 'store/actions/setCardsDataAC';
import { setCardsPackIdAC } from 'store/actions/setCardsPackIdAC';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const fetchCardsData =
    (cardsPack_id: string, cardsCount?: number): AppThunkType =>
    async (dispatch, getState) => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            const questionParam = getState().cards.cardQuestion;
            const cardsPack_idParam = cardsPack_id;
            const sortCardsParam = getState().cards.sortCards;
            const pageParam = getState().cards.page;
            const pageCountParam = cardsCount || getState().cards.pageCount;
            const minParam = getState().cards.minGrade;
            const maxParam = getState().cards.maxGrade;

            const res = await cardsAPI.fetchCards({
                cardQuestion: questionParam,
                sortCards: sortCardsParam,
                min: minParam,
                max: maxParam,
                page: pageParam,
                cardsPack_id: cardsPack_idParam,
                pageCount: pageCountParam,
            });

            dispatch(setCardsDataAC(res.data));
            dispatch(setCardsPackIdAC(cardsPack_id));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
