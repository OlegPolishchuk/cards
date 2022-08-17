import { SET_IS_MODAL_OPEN } from 'store/actions/constants';
import { SetIsModalOpenType } from 'store/actions/types';

export const setIsModalOpenAC = (isModalOpen: boolean): SetIsModalOpenType => {
    return {
        type: SET_IS_MODAL_OPEN,
        payload: { isModalOpen },
    };
};
