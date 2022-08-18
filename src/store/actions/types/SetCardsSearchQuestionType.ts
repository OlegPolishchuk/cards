import { SET_CARD_SEARCH_QUESTION } from 'store/actions/constants';

export type SetCardsSearchQuestionType = {
    type: typeof SET_CARD_SEARCH_QUESTION;
    payload: { question: string };
};
