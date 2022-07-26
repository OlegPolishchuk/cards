export type UserPhotoType = {
    photo: string;
    variant: 'small' | 'standard';
    isEdit?: boolean;
    callback?: (file: string) => void;
};
