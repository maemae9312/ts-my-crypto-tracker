import React, { useState } from 'react';

const PortfolioForm: React.FC<{ portfolio: any[], coins: any[] }> = ({ portfolio, coins }) => {
    const [ coin, setCoin ] = useState('');
    const [ amount, setAmount ] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(coin,Number(amount));
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type='text' value={coin} onChange={(e) => setCoin(e.target.value)} placeholder='Coin ID' />
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />
            <button type='submit'>Add/Update</button> 
        </form>
    );
};

export default PortfolioForm;