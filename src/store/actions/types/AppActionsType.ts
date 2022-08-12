import { setInitializedAC } from 'store/actions/setInitializedAC';
import { setStatusAC } from 'store/actions/setStatusAC';

export type AppActionsType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setInitializedAC>;
