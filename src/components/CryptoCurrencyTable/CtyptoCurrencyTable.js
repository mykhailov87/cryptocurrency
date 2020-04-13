import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoCurrencyButton from '../CryptoCurrencyButton/CryptoCurrencyButton';

import './CryptoCurrencyTable.css';

import { getCryptoDataAsync } from '../../engine/core/crypto/saga/asyncActions';
import { getCryptoDataSelector } from '../../engine/core/crypto/selectors';

function CryptoCurrencyTable () {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCryptoDataAsync());
    }, [dispatch]);

    const data = useSelector(getCryptoDataSelector);
    
    return(
        <>
            <div className="currencyTable">
                {data.map((item, index) =>
                    <div key={index}>
                        <CryptoCurrencyButton item = {item} />
                     </div>)}
                     
            </div>
                <div className='selectCurrency'>Select Currency: </div>
        </>
    );
};



export default CryptoCurrencyTable;