import styles from "./All-weather-values.module.css";

export const AllWeatherValues = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
      <ul>
        <li>
          <p>Feels like</p>
          <h3>29.2℃</h3>
          <img src="/images/thermometer.png" alt="thermometer" />
        </li>
        <li>
          <p>Min ℃</p>
          <h3>29.2℃</h3>
          <p>Max ℃</p>
          <h3>27.9℃</h3>
        </li>
        <li>
          <p>Humidity</p>
          <h3>59%</h3>
          <img src="/images/cloud.png" alt="cloud" />
        </li>
        <li>
          <p>Pressure</p>
          <h3>1007 Pa</h3>
          <img src="/images/pressure.png" alt="pressure" />
        </li>
        <li>
          <p>Wind speed</p>
          <h3>3.17 m/s</h3>
          <img src="/images/wind-speed.png" alt="wind-speed" />
        </li>
        <li>
          <p>Visibility</p>
          <h3>Unlimited</h3>
          <img src="/images/visibility.png" alt="visibility" />
        </li>
      </ul>
      </div>
    </section>
  );
};
