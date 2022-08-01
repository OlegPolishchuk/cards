import { AuthActionsType } from 'store/actions/types';
import { InitialStateType } from 'store/reducers/types';

const initialState = {};

export const authReducer = (
    state: InitialStateType = initialState,
    action: AuthActionsType,
): InitialStateType => {
    switch (action.type) {
        case 'login/SET_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
