import styles from "./Hourly-forecast.module.css";
import Chart from "../Chart";

export const HourlyForecast = ({ hourlyData }) => {
  return (
    <section className={styles.forecast}>
      <div className="container">
        <div className={styles["forecast-container"]}>
          <h1 className={styles["forecast-title"]}>Hourly-forecast</h1>

          <Chart data={hourlyData} />
        </div>
      </div>
    </section>
  );
};
