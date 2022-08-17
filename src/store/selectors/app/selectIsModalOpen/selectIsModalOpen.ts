import { AppRootState } from 'store/types';

export const selectIsModalOpen = (state: AppRootState): boolean => {
    return state.app.isModalOpen;
};
