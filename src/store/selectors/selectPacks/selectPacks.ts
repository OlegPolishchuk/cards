import { PackType } from 'store/reducers/types/PackType';
import { AppRootState } from 'store/types';

export const selectPacks = (state: AppRootState): PackType[] => {
    return state.packs.cardPacks;
};
