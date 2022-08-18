import { SET_CARD_SEARCH_QUESTION } from 'store/actions/constants';
import { SetCardsSearchQuestionType } from 'store/actions/types';

export const setCardsSearchQuestionAC = (
    question: string,
): SetCardsSearchQuestionType => {
    return {
        type: SET_CARD_SEARCH_QUESTION,
        payload: { question },
    };
};
