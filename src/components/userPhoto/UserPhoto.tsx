import React, { ChangeEvent, useRef, useState } from 'react';

import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

import IconUserPhoto from '../../assets/images/userPhoto.png';

import { UserPhotoType } from 'components/userPhoto/type';
import s from 'components/userPhoto/UserPhoto.module.scss';
import { useAppDispatch } from 'hooks';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils/convertFileToBase64';
import { errorHandler } from 'utils/errorHandler';

export const UserPhoto = ({
    photo,
    variant,
    isEdit = false,
    callback,
}: UserPhotoType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const [isImgBroken, setIsImgBroken] = useState(photo === '');

    const userPhotoIcon = IconUserPhoto;
    const width = variant === 'small' ? '36px' : '96px';
    const height = variant === 'small' ? '36px' : '96px';
    const cursor = variant === 'small' ? 'pointer' : '';
    const marginTop = variant === 'small' ? '0' : '30px';

    const handleClick = (): void => {
        if (inputRef) inputRef.current?.click();
    };

    const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        try {
            convertFileToBase64(e, (file64: string) => {
                if (callback) {
                    callback(file64);
                }
            });
        } catch (e) {
            errorHandler(e as Error, dispatch);
        }
    };

    const handleImgError = (): void => {
        setIsImgBroken(true);
        console.log('Upload img error. (src error)');
    };

    return (
        <div
            className={s.container}
            style={{
                backgroundImage: `url(${isImgBroken ? userPhotoIcon : photo})`,
                width,
                height,
                cursor,
                marginTop,
            }}
        >
            {isEdit && (
                <div className={s.addPhotoBtnWrapper}>
                    <input
                        type="file"
                        accept={'image/*'}
                        ref={inputRef}
                        onChange={handleUpload}
                        onError={handleImgError}
                    />
                    <AddAPhotoOutlinedIcon
                        className={s.addPhotoBtnIcon}
                        onClick={handleClick}
                    />
                </div>
            )}
        </div>
    );
};
