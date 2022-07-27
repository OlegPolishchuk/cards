import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './FormBottomText.module.css';

import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

type PropsType = {
    btnTitle: string;
    redirectUrl: string;
    tooltipText: string;
    redirectLinkText: string;
};

export const FormBottomText = (props: PropsType): ReturnComponentType => {
    const { btnTitle, redirectUrl, tooltipText, redirectLinkText } = props;

    return (
        <>
            <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '60px' }}
            >
                {btnTitle}
            </StyledButton>
            <p className={s.tooltip}>{tooltipText}</p>
            <NavLink to={redirectUrl} className={s.link}>
                {redirectLinkText}
            </NavLink>
        </>
    );
};
