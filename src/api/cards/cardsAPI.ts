import { CardsSearchParamsType, GetCardsResponseType } from 'api/cards/types';
import { instance } from 'api/config';

export const cardsAPI = {
    fetchCards: ({
        cardAnswer,
        cardsPack_id,
        min,
        max,
        sortCards,
        page,
        pageCount,
    }: CardsSearchParamsType) => {
        return instance.get<GetCardsResponseType>('cards/card', {
            params: {
                cardAnswer,
                cardsPack_id,
                min,
                max,
                sortCards,
                page,
                pageCount,
            },
        });
    },
};
