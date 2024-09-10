"use client";

import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./CommonGraph.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: { labels: string[]; data: number[] };
}

const PieChart: FC<PieChartProps> = ({ data }) => {
  const pieData = {
    labels: data.labels,
    datasets: [
      {
        label: "Pie Dataset",
        data: data.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={pieData} className={styles.container} />;
};

export default PieChart;
