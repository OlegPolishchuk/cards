import React from 'react';

import { Slider, TextField } from '@mui/material';

import s from './Packs.module.scss';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const Packs = (): ReturnComponentType => {
    return (
        <div className={s.packs}>
            <div>
                <h2>Pack list</h2>
                <StyledButton variant="contained" color="primary">
                    Add new pack
                </StyledButton>
            </div>
            <div>
                <TextField label="Search" />
                <div>
                    <StyledButton>My</StyledButton>
                    <StyledButton>All</StyledButton>
                </div>
                <Slider />
            </div>
        </div>
    );
};
