import { AppRootState } from 'store/types';

export const selectCardsTotalCount = (state: AppRootState): number => {
    // console.log('select => cardsTotalCount');

    return state.cards.cardsTotalCount;
};
