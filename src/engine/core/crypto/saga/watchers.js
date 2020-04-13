import { all, call, takeEvery, put, delay} from 'redux-saga/effects';

import { GET_CRYPTO_DATA_ASYNC } from './asyncTypes';
import axios from 'axios';

import { setCryptoData } from '../action';
function * callGetCryptoDataWorker () {
    try {
        const response = yield axios.get('https://api.kuna.io/v3/exchange-rates');
        function filterCurrentCrypto(value){
            const cryptoValute = ["btc", "eth", "xrp"];
            if(cryptoValute.includes(value.currency))
                return value
        }
        const data = (response.data).filter(filterCurrentCrypto);
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
      const seconds = 60; 
      yield delay(seconds * 1000);
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