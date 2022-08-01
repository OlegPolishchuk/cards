import { REQUEST_STATUS } from 'enums';
import { AppActionsType } from 'store/actions/types';
import { AppStateType } from 'store/reducers/types/AppReducerType';

const initialState: AppStateType = {
    isInitialized: true,
    status: REQUEST_STATUS.IDLE,
    error: null,
};

export const appReducer = (
    state = initialState,
    action: AppActionsType,
): AppStateType => {
    switch (action.type) {
        case 'app/SET_STATUS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
