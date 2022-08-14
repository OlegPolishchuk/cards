import { AppRootState } from 'store/types';

export const selectUserID = (state: AppRootState): string => state.auth.userData._id;
