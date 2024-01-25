// src/App.tsx
import React from 'react';
import Header from './components/Header';
import CoinList from './components/CoinList';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import CryptoList from './components/CryptoList';

function App() {
  return (
    <div>
      <Header />
      <CoinList />
    </div>
  );
}

export default App;
