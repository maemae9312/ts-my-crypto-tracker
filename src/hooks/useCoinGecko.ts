import { useState, useEffect } from 'react';

const useCoinGecko = () => {
    const [coins,setCoins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                const data = await response.json();
                setCoins(data);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    return { coins, loading, error };
};

export default useCoinGecko;