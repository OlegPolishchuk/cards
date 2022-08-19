import { AppRootState } from 'store/types';

export const selectIsUserAuth = (state: AppRootState): boolean => {
    // console.log('select => isUserAuth');

    return state.auth.isUserAuth;
};
