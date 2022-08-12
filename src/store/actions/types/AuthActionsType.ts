import { setUserEmailForCheckAC } from 'store/actions';
import { setAuthErrorAC } from 'store/actions/setAuthErrorAC';
import { setIsEmailSendAC } from 'store/actions/setIsEmailSendAC';
import { setIsPasswordChangedAC } from 'store/actions/setIsPasswordChangedAC';
import { setIsUserAuthAC } from 'store/actions/setIsUserAuthAC';
import { setNewPasswordAC } from 'store/actions/setNewPasswordAC';
import { setUserAC } from 'store/actions/setUserAC';

export type AuthActionsType =
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setIsUserAuthAC>
    | ReturnType<typeof setAuthErrorAC>
    | ReturnType<typeof setIsEmailSendAC>
    | ReturnType<typeof setUserEmailForCheckAC>
    | ReturnType<typeof setNewPasswordAC>
    | ReturnType<typeof setIsPasswordChangedAC>;
