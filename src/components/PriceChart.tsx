import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceChart = () => {
  // ダミーデータと設定
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'BTC Price',
        data: [10000, 10500, 11000, 10000, 9500, 12000],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default PriceChart;