import React, { FC } from 'react';

import { CircularProgress } from '@mui/material';

import { ReturnComponentType } from 'types';

export const Progress: FC = (): ReturnComponentType => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                width: '100%',
                background: 'rgba(0,0,0,.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress size={100} />
        </div>
    );
};
