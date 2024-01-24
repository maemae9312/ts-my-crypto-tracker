import React from "react";

type PriceDisplayProps = {
    currency: string;
    price: number; //この価格はAPIから取得する予定
};

const PriceDisplay: React.FC<PriceDisplayProps> = ({ currency, price }) => {
    return (
        <div>
            <h2>{currency} Price</h2>
            <p>{price} USD</p>
        </div>
    );
};

export default PriceDisplay;