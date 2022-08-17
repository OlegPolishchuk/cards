import { setInitializedAC } from 'store/actions/setInitializedAC';
import { setIsModalOpenAC } from 'store/actions/setIsModalOpenAC';
import { setStatusAC } from 'store/actions/setStatusAC';

export type AppActionsType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setIsModalOpenAC>;
