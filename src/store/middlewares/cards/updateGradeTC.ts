import { AxiosError } from 'axios';

import { cardsAPI } from 'api/cards/cardsAPI';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const updateGradeTC =
    (card_id: string, grade: number): AppThunkType =>
    async (dispatch, getState) => {
        try {
            const { cardsPack_id } = getState().cards;

            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            await cardsAPI.updateGrade(card_id, grade);
            dispatch(fetchCardsData(cardsPack_id));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
