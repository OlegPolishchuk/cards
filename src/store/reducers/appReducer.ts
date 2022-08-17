import { REQUEST_STATUS } from 'enums';
import { SET_APP_STATUS, SET_IS_MODAL_OPEN } from 'store/actions/constants';
import { AppActionsType } from 'store/actions/types';
import { AppStateType } from 'store/reducers/types/AppReducerType';

const initialState: AppStateType = {
    isInitialized: true,
    status: REQUEST_STATUS.IDLE,
    error: null,
    isModalOpen: false,
};

export const appReducer = (
    state = initialState,
    action: AppActionsType,
): AppStateType => {
    switch (action.type) {
        case SET_APP_STATUS:
            return { ...state, ...action.payload };
        case SET_IS_MODAL_OPEN:
            return { ...state, isModalOpen: action.payload.isModalOpen };
        default:
            return state;
    }
};
