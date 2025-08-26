"use client";

import useCapitalChartStore from "@/stores/CapitalChart.store";
import {
  CategoryScale,
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
  const { data } = useCapitalChartStore();
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
