import React from "react";

const PortfolioList: React.FC<{ portfolio: any[] }> = ({ portfolio }) => {
    return (
        <div>
            {portfolio.map((item) => (
                <div key={item.id}>
                    <span>{item.id}: </span>
                    <span>{item.amount}: </span>
                </div>
            ))}
        </div>
    );
};

export default PortfolioList;