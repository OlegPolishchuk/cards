import { AppRootState } from 'store/types';

export const selectCurrentPuckName = (state: AppRootState): string => {
    return state.packs.currentPack.name;
};
