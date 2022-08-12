import { AppRootState } from 'store/types';

export const selectIsPasswordChanged = (state: AppRootState): boolean =>
    state.auth.isPasswordChanged;
