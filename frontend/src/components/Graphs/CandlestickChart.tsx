"use client";

import React, { useMemo } from "react";
import { Chart } from "react-google-charts";
import styles from "./CommonGraph.module.css";
import { getFormattedCandlestickData } from "@/util/helpers";

const CandlestickChart: React.FC<{
  data: { x: string; open: number; high: number; low: number; close: number }[];
}> = ({ data }) => {
  const options = {
    legend: "none",
    backgroundColor: "transparent",
  };

  const formattedData = useMemo(
    () => getFormattedCandlestickData(data),
    [data]
  );

  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="100%"
      data={formattedData}
      options={options}
      className={styles.container}
    />
  );
};

export default CandlestickChart;
