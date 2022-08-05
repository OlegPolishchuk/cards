export type UserDescriptionType = {
    userName: string;
    userEmail: string;
    callback?: (newUserName: string) => void;
};
