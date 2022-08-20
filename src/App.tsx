import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { HashRouter } from 'react-router-dom';

import { Header, Links } from 'components';
import { Progress } from 'components/common/circularProgress/Progress';
import { SnackBar } from 'components/common/snackBar/SnackBar';
import { Pages } from 'components/pages/Pages';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { initializeAppTC } from 'store/middlewares/app/initializeAppTC';
import { selectAppStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const status = useTypedSelector(selectAppStatus);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    return (
        <HashRouter>
            <Header />
            <Container>
                <Pages />
            </Container>
            <Links />
            <SnackBar />
            {status === REQUEST_STATUS.LOADING && <Progress />}
        </HashRouter>
    );
};

export default App;
