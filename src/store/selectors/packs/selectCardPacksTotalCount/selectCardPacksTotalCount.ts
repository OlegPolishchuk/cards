import { AppRootState } from 'store/types';

export const selectCardPacksTotalCount = (state: AppRootState): number => {
    return state.packs.cardPacksTotalCount;
};
