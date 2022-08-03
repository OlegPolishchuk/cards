import { AuthActionsType } from 'store/actions/types';
import { UserType } from 'store/reducers/types';

const initialState = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    isAdmin: false,
    verified: false,
    rememberMe: false,

    error: '',
};

export const authReducer = (
    state: UserType = initialState,
    action: AuthActionsType,
): UserType => {
    switch (action.type) {
        case 'login/SET_USER':
            return { ...action.payload };
        default:
            return state;
    }
};
