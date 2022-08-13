import { PackType } from 'store/reducers/types';

export type CommonTableType = {
    headerTitles: string[];
    packs: PackType[];
};

export type OrderDirectionType = 'asc' | 'desc';
