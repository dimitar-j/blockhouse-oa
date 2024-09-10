"use client";

import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./CommonGraph.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  data: { labels: string[]; data: number[] };
  label: string;
}

const BarChart: FC<BarChartProps> = ({ data, label }) => {
  const barData = {
    labels: data.labels,
    datasets: [
      {
        label: label,
        data: data.data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={barData} className={styles.container} />;
};

export default BarChart;
