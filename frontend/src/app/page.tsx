import { fetchData } from "@/util/helpers";
import styles from "./page.module.css";
import {
  PieChart,
  BarChart,
  LineChart,
  CandlestickChart,
} from "@/components/Graphs";
import {
  BAR_DATA_URL,
  CANDLESTICK_DATA_URL,
  DASHBOARD_BAR_CHART_LABEL,
  DASHBOARD_LINE_CHART_LABEL,
  LINE_DATA_URL,
  PIE_DATA_URL,
} from "@/util/constants";

export default async function Home() {
  const { data: pieData, error: pieError } = await fetchData(PIE_DATA_URL);
  const { data: barData, error: barError } = await fetchData(BAR_DATA_URL);
  const { data: lineData, error: lineError } = await fetchData(LINE_DATA_URL);
  const { data: candlestickData, error: candlestickError } = await fetchData(
    CANDLESTICK_DATA_URL
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <div className={styles.item}>
          {pieError ? pieError : <PieChart data={pieData} />}
        </div>
        <div className={styles.item}>
          {barError ? (
            barError
          ) : (
            <BarChart data={barData} label={DASHBOARD_BAR_CHART_LABEL} />
          )}
        </div>
        <div className={styles.item}>
          {lineError ? (
            lineError
          ) : (
            <LineChart data={lineData} label={DASHBOARD_LINE_CHART_LABEL} />
          )}
        </div>
        <div className={styles.item}>
          {candlestickError ? (
            candlestickError
          ) : (
            <CandlestickChart data={candlestickData.data} />
          )}
        </div>
      </div>
    </main>
  );
}
