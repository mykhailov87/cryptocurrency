import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoCurrencyButton from '../CryptoCurrencyButton/CryptoCurrencyButton';
import { activeCryptoCurrencyInfoSelector } from '../../engine/core/crypto/selectors'

import './CryptoCurrencyTable.css';

import { getCryptoDataAsync } from '../../engine/core/crypto/saga/asyncActions';
import { getCryptoDataSelector } from '../../engine/core/crypto/selectors';

function CryptoCurrencyTable () {
    const dispatch = useDispatch();
    const data = useSelector(getCryptoDataSelector);
    const activeCryptoCurrencyInfo = useSelector(activeCryptoCurrencyInfoSelector);

    useEffect(()=> {
        dispatch(getCryptoDataAsync());
    }, [dispatch]);

    return (
        <>
            <div className="currencyTable">
                {Object.keys(data).map((currency, index) => (
                    <div key={index}>
                        <CryptoCurrencyButton {...data[currency]} />
                     </div>
                ))}
            </div>
            <div className="selectCurrency">Select Currency: </div>
            <div>
              {activeCryptoCurrencyInfo.currency}
            </div>
        </>
    );
}

export default CryptoCurrencyTable;
