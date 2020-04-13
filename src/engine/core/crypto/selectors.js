import { createSelector } from 'reselect'

export const getCryptoDataSelector = state => state.cryptoData.data;
export const cryptoCurrencyActiveSelector = state => state.cryptoData.currency;

export const activeCryptoCurrencyInfoSelector = createSelector(
  getCryptoDataSelector,
  cryptoCurrencyActiveSelector,
  (data, currency) => data[currency] || {}
);


