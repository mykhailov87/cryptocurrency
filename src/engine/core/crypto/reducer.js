import * as types from './types';

const initialState = {
    data: {},
    currency: 'btc'
};

export function setCryptoDataReducer (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case types.SET_CRYPTO_DATA : {
            return {
                ...state,
                data: payload
            }
        }
        case types.SET_ACTIVE_CRYPTO_CURRENCY : {
            if (state.currency === payload) {
                return state;
            }
            return {
                ...state,
                currency: payload
            }
        }
        default: {
            return state;
        }
    }
}
