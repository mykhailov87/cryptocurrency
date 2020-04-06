import { all, call, takeEvery, put} from 'redux-saga/effects';

import { GET_CRYPTO_DATA_ASYNC } from './asyncTypes';
import axios from 'axios';

import { setCryptoData } from '../action';
function * callGetCryptoDataWorker () {
    try {
        const response = yield axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        
        const action = setCryptoData(response.data);
            
        yield put(action);
        
    }

    catch (err) {
        console.error(err)
    }
}

function * watchGetCryptoData() {
    yield takeEvery (GET_CRYPTO_DATA_ASYNC, callGetCryptoDataWorker)
}

export function* cryptoWatcher() {
    yield all([
        call(watchGetCryptoData)
    ]);
}