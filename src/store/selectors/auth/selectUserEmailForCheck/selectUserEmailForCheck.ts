import { AppRootState } from 'store/types';

export const selectUserEmailForCheck = (state: AppRootState): string => {
    return state.auth.userEmailFoCheck;
};
