import React from 'react';
import './CryptoCurrencyButton.css'

function CryptoCurrencyButton (props) {
    const { img, alt } = props;
    return(
        <>
            <div className="currencyButton">
                <img src={img} alt={alt}/>
                <h3>6655</h3>
                <h3>6655</h3>
                <h3>6655</h3>
            </div>
        </>
    );
};

export default CryptoCurrencyButton;