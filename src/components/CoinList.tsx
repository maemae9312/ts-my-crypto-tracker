import React from 'react';
import useCoinGecko from '../hooks/useCoinGecko';

const CoinList: React.FC = () => {
    const { coins, loading, error } = useCoinGecko();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {coins.map((coin) => (
                <div key={coin.id}>
                    <h3>{coin.name}</h3>
                    <p>${coin.current_price}</p>
                </div>
            ))}
        </div>
    );
};

export default CoinList;