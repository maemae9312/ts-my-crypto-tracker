import React from 'react';
import CurrencySelector from './components/CurrencySelector';
import PriceDisplay from './components/PriceDisplay';
import PriceChart from './components/PriceChart';

function App() {
  return (
    <div className='App'>
      <CurrencySelector />
      <PriceDisplay currency='BTC' price={10000} /> {/* ダミーデーター */}
      <PriceChart />
    </div>
  );
}

export default App;