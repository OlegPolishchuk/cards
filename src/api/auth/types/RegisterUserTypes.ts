export type UserDataType = {
    email: string;
    password: string;
};

export type AddedUserType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string;
    tokenDeathTime: number;
    avatar: null | string;
};

export type RegisterUserErrorType = {
    error: string;
    in: string;
    isEmailValid: boolean;
    isPassValid: boolean;
};
