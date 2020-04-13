import React from 'react';
import { Provider } from 'react-redux';
import { store } from './engine/init/store';

import './App.css';
import CryptoCurrencyTable from './components/CryptoCurrencyTable/CtyptoCurrencyTable';
import CryptoCurrencyCalc from './components/CryptoCurrencyCalc/CryptoCurrencyCalc';

function App() {
  return (
    <>
      <Provider store={store}>
        <CryptoCurrencyTable />
        <CryptoCurrencyCalc />
      </Provider>
    </>
  );
}



export default App;
