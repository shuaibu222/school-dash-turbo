'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarCharts() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Students',
          data: [3, 5, 2, 4, 6, 1],
          borderColor: '#4e044e',
          backgroundColor: '#eb00c0',
        },
        {
          label: 'Teachers',
          data: [2, 4, 6, 1, 3, 5],
          borderColor: '#4e044e',
          backgroundColor: 'cyan',
        },
      ],
    });

    setChartOptions({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Admission Report',
        },
      },
    });
  }, []);
  return <Bar options={chartOptions} data={chartData} />;
}
