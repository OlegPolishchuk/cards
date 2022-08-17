import { PackType } from 'store/reducers/types';

export type DeletePackModalType = {
    pack: PackType;
    callback: () => void;
};
