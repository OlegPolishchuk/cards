import { instance } from 'api/config';
import {
    createNewPackType,
    GetPacksResponseType,
    UpdatePackDataType,
} from 'api/packs/types';
import { PacksSearchParamsType } from 'store/reducers/types';

export const packsAPI = {
    fetchPack: ({
        packName,
        min,
        page,
        sortPacks,
        pageCount,
        max,
        user_id,
    }: PacksSearchParamsType) => {
        return instance.get<GetPacksResponseType>('cards/pack', {
            params: {
                packName,
                min,
                max,
                sortPacks,
                page,
                pageCount,
                user_id,
            },
        });
    },
    createPack: ({ name, deckCover, isPrivate = false }: createNewPackType) => {
        return instance.post('cards/pack', {
            cardsPack: {
                name,
                deckCover,
                private: isPrivate,
            },
        });
    },
    deletePack: (id: string) => {
        return instance.delete('cards/pack', {
            params: { id },
        });
    },
    updatePack: ({ _id, name, isPrivate, deckCover }: UpdatePackDataType) => {
        return instance.put('cards/pack', {
            cardsPack: {
                _id,
                name,
                private: isPrivate,
                deckCover,
            },
        });
    },
};
