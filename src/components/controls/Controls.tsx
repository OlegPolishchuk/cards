import React from 'react';

import { Slider, TextField } from '@mui/material';

import s from './Controls.module.scss';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

export const Controls = (): ReturnComponentType => {
    return (
        <div className={s.controls}>
            <TextField
                label="Search"
                variant="outlined"
                size="small"
                className={s.search}
            />
            <div className={s.btnContainer}>
                <StyledButton variant="contained" color="primary" className={s.btn}>
                    My
                </StyledButton>
                <StyledButton variant="contained" color="primary" className={s.btn}>
                    All
                </StyledButton>
            </div>
            <div className={s.sliderContainer}>
                <span className={s.sliderValue} />
                <Slider />
                <span className={s.sliderValue} />
            </div>
        </div>
    );
};
