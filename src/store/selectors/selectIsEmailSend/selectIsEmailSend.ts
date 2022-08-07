import { AppRootState } from 'store/types';

export const selectIsEmailSend = (state: AppRootState): boolean => {
    return state.auth.isEmailSend;
};
