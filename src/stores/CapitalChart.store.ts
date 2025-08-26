import { ChartData } from "chart.js";
import { create } from "zustand";

interface CapitalChartStore {
  data: ChartData<"line">;
  setData: (data: ChartData<"line">) => void;
}

const DATA_DEFAULT: ChartData<"line"> = {
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
      tension: 0.4,
      fill: false,
      borderWidth: 3,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const useCapitalChartStore = create<CapitalChartStore>((set) => ({
  data: DATA_DEFAULT,
  setData: (data: ChartData<"line">) => set({ data }),
}));

export default useCapitalChartStore;
