import { UserDataType } from 'api/types';

export type LoginUserType = UserDataType & {
    rememberMe: boolean;
};
