import { all, call, takeEvery, put, delay} from 'redux-saga/effects';

import { GET_CRYPTO_DATA_ASYNC } from './asyncTypes';
import axios from 'axios';

import { setCryptoData } from '../action';

const CURRENCY_FOR_CHECK = ['btc', 'eth', 'xrp'];
const SECOND = 1000;
const MINUTE = 60 * SECOND;

function * callGetCryptoDataWorker () {
    try {
        const response = yield axios.get('https://api.kuna.io/v3/exchange-rates');

        const data = response.data.reduce((acc, item) => {
            const { currency } = item;
            if (CURRENCY_FOR_CHECK.includes(currency)) {
                acc[currency] = item;
            }
            return acc;
        }, {});

        const action = setCryptoData(data);
        yield put(action);
    }

    catch (err) {
        console.error(err)
    }
}
function* callGetCryptoDataWorkerPeriod() {
    while (true) {
      yield call(callGetCryptoDataWorker);
      yield delay(MINUTE);
    }
  }

function * watchGetCryptoData() {
    yield takeEvery (GET_CRYPTO_DATA_ASYNC, callGetCryptoDataWorker)
}

function * watchGetCryptoDataPeriod() {
    yield takeEvery (GET_CRYPTO_DATA_ASYNC, callGetCryptoDataWorkerPeriod)
}

export function* cryptoWatcher() {
    yield all([
        call(watchGetCryptoData),
        call(watchGetCryptoDataPeriod)
    ]);
}

function filterCurrentCrypto(value){
    const cryptoValute = ["btc", "eth", "xrp"];
    if(cryptoValute.includes(value.currency))
        return value
}
