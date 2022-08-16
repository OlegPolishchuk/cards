import { SET_CARDS } from 'store/actions/constants';
import { SetCardsType } from 'store/actions/types/SetCardsType';
import { GetCardsType } from 'store/reducers/types/CardsReducerType';

export const setCardsDataAC = (data: GetCardsType): SetCardsType => {
    return {
        type: SET_CARDS,
        payload: { data },
    };
};
