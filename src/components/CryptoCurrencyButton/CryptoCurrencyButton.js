import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CryptoCurrencyButton.css'
import { setCryptoCurrencyIndex } from '../../engine/core/crypto/action';
import { getCryptoCurrencyIndex } from '../../engine/core/crypto/selectors';


function CryptoCurrencyButton (props) {
    const { item } = props;
    const { currency, rub, uah, usd } = item;

    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(setCryptoCurrencyIndex());
    }, [dispatch]);
    
    const index = useSelector(getCryptoCurrencyIndex);
    console.log(index);

    return(
        <>
            <div className="currencyButton">
                <button onClick={() => dispatch(getCryptoCurrencyIndex())}>
                    <img src={require(`../../assets/images/${currency.toUpperCase()}.png`)} alt=''/>
                    <h3>UAH: {uah}</h3>
                    <h3>USD: {usd}</h3>
                    <h3>RUB: {rub}</h3>
                </button>
            </div>
        </>
    );
};

export default CryptoCurrencyButton;