import React from 'react';

import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

import IconUserPhoto from '../../assets/images/userPhoto.png';

import s from './UserPhoto.module.css';

import { UserPhotoType } from 'components/userPhoto/type';
import { ReturnComponentType } from 'types';

export const UserPhoto = ({
    photo = '',
    variant,
    isEdit = false,
    callback,
}: UserPhotoType): ReturnComponentType => {
    const userPhoto = photo || IconUserPhoto;
    const width = variant === 'small' ? '36px' : '96px';
    const height = variant === 'small' ? '36px' : '96px';
    const cursor = variant === 'small' ? 'pointer' : '';

    return (
        <div
            className={s.container}
            style={{
                backgroundImage: `url(${userPhoto})`,
                width,
                height,
                cursor,
            }}
        >
            {isEdit && (
                <button type="button" className={s.addPhotoBtn} onClick={callback}>
                    <AddAPhotoOutlinedIcon />
                </button>
            )}
        </div>
    );
};
