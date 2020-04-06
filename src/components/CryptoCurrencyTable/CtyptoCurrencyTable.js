import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCryptoData } from '../../engine/core/crypto/action'
import CryptoCurrencyButton from '../CryptoCurrencyButton/CryptoCurrencyButton';
import BTC from '../../images/BTC.png';
import ETH from '../../images/ETH.png';
import XRP from '../../images/XRP.png';

import './CryptoCurrencyTable.css';

import { getCryptoDataAsync } from '../../engine/core/crypto/saga/asyncActions';
import { getCryptoDataSelector, getCryptoUsdSelector } from '../../engine/core/crypto/selectors';


function CryptoCurrencyTable () {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCryptoDataAsync());
    }, [dispatch]);

    useEffect(()=>{
        dispatch(setCryptoData());
    }, [dispatch]);



    /*const selector = useSelector(state => state.cryptoData.data);
    console.log(selector);*/

    return(
        <>
            <div className="currencyTable">
                <CryptoCurrencyButton img={BTC} alt={''} />
                <CryptoCurrencyButton img={ETH} alt={''}/>
                <CryptoCurrencyButton img={XRP} alt={''}/>
            </div>
        </>
    );
};

export default CryptoCurrencyTable;