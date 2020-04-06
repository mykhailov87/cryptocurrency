import {GET_CRYPTO_DATA} from './types';

const initialState = {
    data: []
};

export function getCryptoDataReducer (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case GET_CRYPTO_DATA : {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state;
        }
    }
}