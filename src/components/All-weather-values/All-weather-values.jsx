import styles from "./All-weather-values.module.css";

export const AllWeatherValues = () => {
  return (
    <section className={styles.wrapper}>
      <ul>
        <li>
          <p>Feels like</p>
          <h3>29.2℃</h3>
          <img src="" alt="" />
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
          <img src="" alt="" />
        </li>
        <li>
          <p>Pressure</p>
          <h3>1007 Pa</h3>
          <img src="" alt="" />
        </li>
        <li>
          <p>Wind speed</p>
          <h3>3.17 m/s</h3>
        </li>
        <li>
          <p>Visibility</p>
          <h3>Unlimited</h3>
        </li>
      </ul>
    </section>
  );
};
