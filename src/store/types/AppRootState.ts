import { store } from 'store/store';

export type AppRootState = ReturnType<typeof store.getState>;
