import React from 'react';

import { NavLink } from 'react-router-dom';

import s from 'components/formBottomText/FormBottomText.module.scss';
import { StyledButton } from 'components/header/styles';
import { ReturnComponentType } from 'types';

type PropsType = {
    btnTitle: string;
    redirectUrl?: string;
    tooltipText?: string;
    redirectLinkText?: string;
    callback?: () => void;
};

export const FormBottomText = (props: PropsType): ReturnComponentType => {
    const { btnTitle, redirectUrl, tooltipText, redirectLinkText, callback } = props;

    const finalRedirectUrl = redirectUrl || '';

    const btnHandler = (): void => {
        if (callback) {
            callback();
        }
    };

    return (
        <>
            <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '60px' }}
                onClick={btnHandler}
            >
                {btnTitle}
            </StyledButton>
            <p className={s.tooltip}>{tooltipText}</p>
            <NavLink to={finalRedirectUrl} className={s.link}>
                {redirectLinkText}
            </NavLink>
        </>
    );
};
