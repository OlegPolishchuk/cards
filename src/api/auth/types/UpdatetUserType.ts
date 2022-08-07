import { AddedUserType } from 'api/auth/types/RegisterUserTypes';

export type UpdatedUserType = {
    updatedUser: AddedUserType;
    error?: string | null;
};
