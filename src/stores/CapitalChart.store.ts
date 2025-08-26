import { ChartData } from "chart.js";
import { create } from "zustand";

interface CapitalChartStore {
  data: ChartData<"line">;
  setData: (data: ChartData<"line">) => void;
}

const DATA_DEFAULT: ChartData<"line"> = {
  labels: [
    "",
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
      data: [4000, 5900, 8000, 8100, 5600, 5500, 4000, 8000],
      borderColor: "#29A073",
      tension: 0.4,
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "#29A073",
    },
    {
      label: "Expenses",
      data: [2800, 4800, 4000, 1900, 8600, 2700, 6000, 10000],
      borderColor: "#C8EE44",
      tension: 0.4,
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "#C8EE44",
    },
  ],
};

const useCapitalChartStore = create<CapitalChartStore>((set) => ({
  data: DATA_DEFAULT,
  setData: (data: ChartData<"line">) => set({ data }),
}));

export default useCapitalChartStore;
