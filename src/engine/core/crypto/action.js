import * as types from './types';

export function setCryptoData (data) {
    return {
        type: types.SET_CRYPTO_DATA,
        payload: data
    }
}

export function setCryptoCurrencyIndex (currency) {
    return {
        type: types.SET_CRYPTO_CURRENCY_INDEX,
        payload: currency
    }
}

export const setActiveCurrency = (currency) => ({
    type: types.SET_ACTIVE_CRYPTO_CURRENCY,
    payload: currency
});
