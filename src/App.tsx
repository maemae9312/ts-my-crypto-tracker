// src/App.tsx
import React, { useState } from 'react';
import PortfolioList from './components/PortfolioList';
import Header from './components/Header';
import CoinList from './components/CoinList';
import PortfolioForm from './components/PortfolioForm';
// import MainContent from './components/MainContent';
// import NavBar from './components/NavBar';
// import CryptoList from './components/CryptoList';

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState([
    { id: 'bitcoin', amount: 0.5 },
    { id: 'ethereum', amount: 2},
  ]);
  const handleAddPortfolio = ( coin: string, amount: number ) => {
    // ポートフォリオの更新ロジック記載
  }

  return (
    <div>
      <PortfolioList onAdd = {handleAddPortfolio} />
      <PortfolioList portfolio = {portfolio} />
      <Header />
      <CoinList />
    </div>
  );
};

export default App;
