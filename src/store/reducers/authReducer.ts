import { InitialStateType } from 'store/reducers/types';

const initialState = {};

export const authReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialStateType = initialState,
    action: any,
): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};
