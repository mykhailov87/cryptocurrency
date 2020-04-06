import {GET_CRYPTO_DATA} from './types';

export function setCryptoData (data) {
    return {
        type: GET_CRYPTO_DATA,
        payload: data
    }
}

