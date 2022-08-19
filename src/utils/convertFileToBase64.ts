import { ChangeEvent } from 'react';

import { MAX_IMG_SIZE } from 'constants/imgSizes';

// export const convertFileToBase64 = (
//     file: File,
//     callback: (value: string) => void,
// ): void => {
//     if (file.size < MAX_IMG_SIZE) {
//         const reader = new FileReader();
//
//         reader.onloadend = () => {
//             const file64 = reader.result as string;
//
//             callback(file64);
//         };
//
//         reader.readAsDataURL(file);
//     } else {
//         throw new Error('File is to big');
//     }
// };

export const convertFileToBase64 = (
    e: ChangeEvent<HTMLInputElement>,
    callback: (file64: string) => void,
): void => {
    if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];

        if (file.size < MAX_IMG_SIZE) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const file64 = reader.result as string;

                callback(file64);
            };

            reader.readAsDataURL(file);
        } else {
            throw new Error('File is to big');
        }
    }
};
