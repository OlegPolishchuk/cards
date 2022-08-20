import React from 'react';

import s from './Title.module.scss';

import { TitlePropsType } from 'components/title/type';
import { ReturnComponentType } from 'types';

export const Title = React.memo(
    ({ title, children }: TitlePropsType): ReturnComponentType => {
        return (
            <h2 className={s.title}>
                {title}
                {children && children}
            </h2>
        );
    },
);
