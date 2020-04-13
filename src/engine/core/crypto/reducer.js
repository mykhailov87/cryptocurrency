import * as types from './types';

const initialState = {
    data: [],
    currency: 'BTC'
};

export function setCryptoDataReducer (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case types.SET_CRYPTO_DATA : {
            return {
                ...state,
                data: action.payload
            }
        }
        case types.SET_CRYPTO_CURRENCY_INDEX : {
            return {
                ...state,
                currency: action.payload
            }
        }
        default: {
            return state;
        }
    }
}