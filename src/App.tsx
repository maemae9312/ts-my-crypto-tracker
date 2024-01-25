// src/App.tsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import CryptoList from './components/CryptoList';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <NavBar />
      <CryptoList />
    </div>
  );
}

export default App;
