import React, { ReactNode, useEffect } from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import ReactDOM from 'react-dom';

import s from './CustomModal.module.scss';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setIsModalOpenAC } from 'store/actions/setIsModalOpenAC';
import { selectIsModalOpen } from 'store/selectors';
import { ReturnComponentType } from 'types';

const MODALS_ID = document.getElementById('modal') as HTMLElement;

export type CustomModalType = {
    title: string;
    mainChildren: ReactNode;
    footerChildren?: ReactNode;
    isCanselBtn?: boolean;
};

export const CustomModal = ({
    title,
    mainChildren,
    footerChildren,
    isCanselBtn,
}: CustomModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const isModalOpen = useTypedSelector(selectIsModalOpen);

    const handleClose = (): void => {
        dispatch(setIsModalOpenAC(false));
    };

    const showModalClass = isModalOpen ? s.open : s.close;

    useEffect(() => {
        const close = (e: KeyboardEvent): void => {
            if (e.key === `Escape`) handleClose();
        };

        window.addEventListener('keydown', close);

        return () => window.removeEventListener('keydown', close);
    }, []);

    useEffect(() => {
        const close = (e: MouseEvent): void => {
            const element = e.target as HTMLElement;

            if (element.id === 'modal_container') handleClose();
        };

        window.addEventListener('click', close);
    }, []);

    return ReactDOM.createPortal(
        <div className={`${s.container} ${showModalClass}`} id="modal_container">
            {isModalOpen && (
                <div className={s.modal}>
                    <header className={s.header}>
                        <h3 className={s.title}>{title}</h3>
                        <CloseOutlinedIcon className={s.closeBtn} onClick={handleClose} />
                    </header>
                    <main className={s.main}>{mainChildren}</main>
                    {footerChildren && (
                        <footer className={s.footer}>
                            {isCanselBtn && (
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                            )}
                            {footerChildren}
                        </footer>
                    )}
                </div>
            )}
        </div>,
        MODALS_ID,
    );
};
