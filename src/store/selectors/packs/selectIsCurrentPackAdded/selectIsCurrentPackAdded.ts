import { AppRootState } from 'store/types';

export const selectIsCurrentPackAdded = (state: AppRootState): boolean => {
    return state.packs.isCurrentPackAdded;
};
