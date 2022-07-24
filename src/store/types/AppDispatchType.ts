import { ThunkDispatch } from 'redux-thunk';

import { AppActionsType, AppRootState } from 'store/types';

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActionsType>;
