import React from 'react';

const CryptoList: React.FC = () => {
  // 仮のデータ
  const cryptos = [
    { name: "Bitcoin", price: "50000" },
    { name: "Ethereum", price: "3000" },
    // 他の通貨
  ];

  return (
    <div>
      {cryptos.map((crypto, index) => (
        <div key={index} className="p-4 border-b border-gray-200">
          <h3 className="text-lg">{crypto.name}</h3>
          <p>${crypto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
