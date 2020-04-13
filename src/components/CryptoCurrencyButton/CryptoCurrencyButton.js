import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCurrency } from '../../engine/core/crypto/action';
import './CryptoCurrencyButton.css'

function CryptoCurrencyButton (props) {
    const { currency, rub, uah, usd } = props;
    const dispatch = useDispatch();

    const onClickHandler = useCallback(() => {
        dispatch(setActiveCurrency(currency))
    }, [currency, dispatch]);

    return(
        <>
            <div className="currencyButton">
                <button onClick={onClickHandler}>
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
