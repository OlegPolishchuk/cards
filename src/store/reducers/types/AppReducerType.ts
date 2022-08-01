import { REQUEST_STATUS } from 'enums';

export type AppStateType = {
    isInitialized: boolean;
    status: REQUEST_STATUS;
    error: null | string;
};
