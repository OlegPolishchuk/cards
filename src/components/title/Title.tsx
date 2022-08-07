import React, { FC } from 'react';

import s from './Title.module.scss';

import { TitlePropsType } from 'components/title/type';
import { ReturnComponentType } from 'types';

export const Title: FC<TitlePropsType> = ({ title, children }): ReturnComponentType => {
    return (
        <h2 className={s.title}>
            {title}
            {children && children}
        </h2>
    );
};
