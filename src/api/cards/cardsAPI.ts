import {
    CardsSearchParamsType,
    CreateNewCardType,
    GetCardsResponseType,
    UpdateCardType,
} from 'api/cards/types';
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
    createCard: (data: CreateNewCardType) => {
        return instance.post('cards/card', {
            card: { ...data },
        });
    },
    editCard: (data: UpdateCardType) => {
        return instance.put('cards/card', { card: { ...data } });
    },
    deleteCard: (id: string) => {
        return instance.delete('cards/card', { params: { id } });
    },
    updateGrade: (card_id: string, grade: number) => {
        return instance.put('cards/grade', { card_id, grade });
    },
};
