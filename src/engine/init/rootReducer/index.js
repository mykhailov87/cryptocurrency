import { combineReducers } from 'redux';
import { getCryptoDataReducer } from '../../core/crypto/reducer';

const rootReducer = () => combineReducers ({
    cryptoData: getCryptoDataReducer,
});

export { rootReducer };