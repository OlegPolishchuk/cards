import { AuthActionsType } from 'store/actions/types';
import { AuthReducerType } from 'store/reducers/types';

const initialState = {
    userData: {
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
        __v: 0,
        token: '',
        tokenDeathTime: 0,
    },
    userEmailFoCheck: '',
    error: '',
    isUserAuth: false,
    isEmailSend: false,
};

export const authReducer = (
    state: AuthReducerType = initialState,
    action: AuthActionsType,
): AuthReducerType => {
    switch (action.type) {
        case 'login/SET_USER':
            return { ...state, userData: { ...action.payload } };
        case 'auth/SET_IS_USER_AUTH':
            return { ...state, isUserAuth: action.payload.isUserAuth };
        case 'auth/SET_AUTH_ERROR':
            return { ...state, error: action.payload.error };
        case 'auth/SET_IS_EMAIL_SEND':
            return { ...state, isEmailSend: action.payload.isEmailSend };
        case 'auth/SET_USER_EMAIL_FOR_CHECK':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
