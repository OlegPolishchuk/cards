import React from 'react';

import IconUserPhoto from '../../assets/images/userPhoto.png';

import { ReturnComponentType } from 'types';

export type UserPhotoType = {
    photo?: string;
    variant: 'small' | 'standard';
};

export const UserPhoto = ({
    photo = '',
    variant,
}: UserPhotoType): ReturnComponentType => {
    const userPhoto = photo || IconUserPhoto;
    const width = variant === 'small' ? '36px' : '96px';
    const height = variant === 'small' ? '36px' : '96px';
    const cursor = variant === 'small' ? 'pointer' : '';

    return (
        <div
            style={{
                background: `url(${userPhoto})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width,
                height,
                borderRadius: '50%',
                cursor,
            }}
        />
    );
};
