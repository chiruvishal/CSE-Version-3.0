import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useInView } from 'react-intersection-observer';

const BarChart = () => {
  const chartRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when chart enters viewport
  });

  useEffect(() => {
    let chartInstance = null;

    const chartOptions = {
      type: 'bar',
      data: {
        labels: ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
        datasets: [
          {
            label: '# Offers Recieved',
            data: [ 552, 287, 599, 738, 750],
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 200,
              },
          },
        },
        layout: {
            padding: {
              top: 10,
              right: 30,
             
              left: 30,
            },
          },
          animation: {
            duration: inView ? 500 : 0, // Animation duration in milliseconds
            easing: 'easeInOutQuart', // Animation easing function
          },
      },
    };

    if (chartRef && chartRef.current) {
        if (chartInstance) {
            chartInstance.destroy();
          }
          chartInstance = new Chart(chartRef.current, chartOptions);
      
    }
    return () => {
        // Clean up chart instance on component unmount
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
  }, [inView]);



  return (
   
    <div ref={ref}>
      <canvas ref={chartRef} />
      </div>
  );
};

export default BarChart;
