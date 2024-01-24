import React, { useState } from "react";

const CurrencySelector = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('BTC');

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(e.target.value);
    };

    return (
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="BTC">Bitcoin</option>
            <option value="EHT">Ethereum</option>
            <option value="LTC">Litecoin</option>
            {/*他の通貨オプション */}
        </select>
    );
};

export default CurrencySelector;

