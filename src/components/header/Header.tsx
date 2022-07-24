import React from 'react';

import { Box, Container } from '@mui/material';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

import logo from 'assets/images/logo.svg';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        <StyledButton variant="contained">Sign in</StyledButton>
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
