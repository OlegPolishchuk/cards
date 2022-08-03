import { setAuthErrorAC } from 'store/actions/setAuthErrorAC';
import { setIsUserAuth } from 'store/actions/setIsUserAuth';
import { setUser } from 'store/actions/setUser';

export type AuthActionsType =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsUserAuth>
    | ReturnType<typeof setAuthErrorAC>;
