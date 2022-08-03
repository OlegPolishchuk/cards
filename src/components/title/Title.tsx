import React, { FC } from 'react';

import { TitlePropsType } from 'components/title/type';
import { ReturnComponentType } from 'types';

export const Title: FC<TitlePropsType> = ({ title, children }): ReturnComponentType => {
    return (
        <h2>
            {title}
            {children && children}
        </h2>
    );
};
