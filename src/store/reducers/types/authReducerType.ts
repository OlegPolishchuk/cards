export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string | null;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;

    error?: string;
};
