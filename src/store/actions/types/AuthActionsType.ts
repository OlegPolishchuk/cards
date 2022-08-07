import { setUserEmailForCheckAC } from 'store/actions';
import { setAuthErrorAC } from 'store/actions/setAuthErrorAC';
import { setIsEmailSendAC } from 'store/actions/setIsEmailSendAC';
import { setIsUserAuth } from 'store/actions/setIsUserAuth';
import { setUser } from 'store/actions/setUser';

export type AuthActionsType =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsUserAuth>
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setIsEmailSendAC>
    | ReturnType<typeof setUserEmailForCheckAC>;
