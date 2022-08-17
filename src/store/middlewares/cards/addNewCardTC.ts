import { AxiosError } from 'axios';

import { cardsAPI } from 'api/cards/cardsAPI';
import { AddEditModalFieldsType } from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const addNewCardTC =
    (data: AddEditModalFieldsType): AppThunkType =>
    async (dispatch, getState) => {
        try {
            const { cardsPack_id } = getState().cards;
            const newData = { ...data, cardsPack_id };

            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            await cardsAPI.createCard(newData);
            dispatch(fetchCardsData(cardsPack_id));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
