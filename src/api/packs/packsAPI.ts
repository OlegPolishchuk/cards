import { instance } from 'api/config';
import { createNewPackType, GetCardsResponseType } from 'api/packs/types';
import { PacksSearchParamsType } from 'store/reducers/types';

export const packsAPI = {
    fetchPack: ({
        packName,
        min,
        page,
        sortPacks,
        pageCount,
        user_id,
        max,
    }: PacksSearchParamsType) => {
        return instance.get<GetCardsResponseType>('cards/pack', {
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
                privet: isPrivate,
            },
        });
    },
    deletePack: (id: string) => {
        return instance.delete('cards/pack', {
            params: { id },
        });
    },
    updatePack: (_id: string, name: string = '') => {
        return instance.put('cards/pack', {
            _id,
            name,
        });
    },
};
