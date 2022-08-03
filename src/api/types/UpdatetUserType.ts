import { AddedUserType } from 'api/types/registerUserTypes';

export type UpdatedUserType = {
    updatedUser: AddedUserType;
    error?: string | null;
};
