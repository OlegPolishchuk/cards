import { setInitializedAC } from 'store/actions/setInitialized';
import { setStatusAC } from 'store/actions/setStatus';

export type AppActionsType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setInitializedAC>;
