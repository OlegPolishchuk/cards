import { SET_IS_MODAL_OPEN } from 'store/actions/constants';

export type SetIsModalOpenType = {
    type: typeof SET_IS_MODAL_OPEN;
    payload: { isModalOpen: boolean };
};
