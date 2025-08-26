"use client";

import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const data: ChartData<"line"> = {
    labels: [
      "Apr 14",
      "Apr 15",
      "Apr 16",
      "Apr 17",
      "Apr 18",
      "Apr 19",
      "Apr 20",
    ],
    datasets: [
      {
        label: "Income",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#29A073",
        backgroundColor: "rgba(41, 160, 115, 0.1)",
        tension: 0.4,
        fill: false,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Expenses",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "#C8EE44",
        backgroundColor: "rgba(200, 238, 68, 0.1)",
        tension: 0.4,
        fill: false,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Financial Performance Overview",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: "Amount ($)",
        },
      },
      x: {
        title: {
          display: false,
          text: "Month",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Chart;
