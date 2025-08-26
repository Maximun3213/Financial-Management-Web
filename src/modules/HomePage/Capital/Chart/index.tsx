"use client";

import useCapitalChartStore from "@/stores/CapitalChart.store";
import { numberHelper } from "@/utils/number-helper";
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
    maintainAspectRatio: false,

    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Financial Performance Overview",
      },
      tooltip: {
        enabled: true,
        intersect: false,
        mode: "nearest",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 2000,
          color: "#929EAE",
          font: {
            size: numberHelper.convertRemToPx(1.2),
          },
          callback: (value: number | string): string => {
            const num = typeof value === "string" ? parseFloat(value) : value;
            if (Math.abs(num) >= 1000) {
              return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k`;
            }
            return `${num}k`;
          },
        },
        title: {
          display: false,
          text: "Amount ($)",
        },
      },
      x: {
        grid: {},
        title: {
          display: false,
          text: "Month",
        },
        ticks: {
          color: "#929EAE",
          font: {
            size: numberHelper.convertRemToPx(1.2),
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Chart;
