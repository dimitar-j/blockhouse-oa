"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./CommonGraph.module.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: { labels: string[]; data: number[] };
  label: string;
}

const LineChart: FC<LineChartProps> = ({ data, label }) => {
  const lineData = {
    labels: data.labels,
    datasets: [
      {
        label: label,
        data: data.data,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={lineData} className={styles.container} />;
};

export default LineChart;
