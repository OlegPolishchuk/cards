import { ThunkAction } from 'redux-thunk';

import { AppActionsType, AppRootState } from 'store/types';

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    AppActionsType
>;
