import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, chartOptions);
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
