import { AppRootState } from 'store/types';

export const selectUserAvatar = (state: AppRootState): string | null => {
    return state.auth.userData.avatar;
};
