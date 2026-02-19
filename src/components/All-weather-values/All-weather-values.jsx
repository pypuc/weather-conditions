import styles from "./All-weather-values.module.css";

export const AllWeatherValues = ({ city }) => {
  if (!city) {
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles["wrapper-container"]}>
            <ul className={styles["wrapper-list"]}>
              <li className={styles["wrapper-iteam"]}>
                <p style={{ padding: "20px" }}>
                  Search city to see weather details
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles["wrapper-container"]}>
          <ul className={styles["wrapper-list"]}>
            <li className={styles["wrapper-iteam"]}>
              <p className={styles["wrapper-text"]}>Feels like</p>
              <h3 className={styles["wrapper-title"]}>
                {Math.round(city.main.feels_like)}℃
              </h3>
              <img
                className={styles["wrapper-img"]}
                src="/images/thermometer.png"
                alt="thermometer"
              />
            </li>

            <li className={styles["wrapper-iteam"]}>
              <div className={styles["cont"]}>
                <div className={styles["wrapper-cont2"]}>
                  <p className={styles["wrapper-text"]}>Min ℃</p>
                  <h3 className={styles["wrapper-title"]}>
                    {Math.round(city.main.temp_min)}℃
                  </h3>
                </div>

                <div className={styles["wrapper-cont2"]}>
                  <p className={styles["wrapper-text"]}>Max ℃</p>
                  <h3 className={styles["wrapper-title"]}>
                    {Math.round(city.main.temp_max)}℃
                  </h3>
                </div>
              </div>
            </li>

            <li className={styles["wrapper-iteam"]}>
              <p className={styles["wrapper-text"]}>Humidity</p>
              <h3 className={styles["wrapper-title"]}>{city.main.humidity}%</h3>
              <img
                className={styles["wrapper-img"]}
                src="/images/cloud.png"
                alt="cloud"
              />
            </li>

            <li className={styles["wrapper-iteam"]}>
              <p className={styles["wrapper-text"]}>Pressure</p>
              <h3 className={styles["wrapper-title"]}>
                {city.main.pressure} hPa
              </h3>
              <img
                className={styles["wrapper-img"]}
                src="/images/pressure.png"
                alt="pressure"
              />
            </li>

            <li className={styles["wrapper-iteam"]}>
              <p className={styles["wrapper-text"]}>Wind speed</p>
              <h3 className={styles["wrapper-title"]}>{city.wind.speed} m/s</h3>
              <img
                className={styles["wrapper-img"]}
                src="/images/wind-speed.png"
                alt="wind-speed"
              />
            </li>

            <li className={styles["wrapper-iteam"]}>
              <p className={styles["wrapper-text"]}>Visibility</p>
              <h3 className={styles["wrapper-title"]}>
                {city.visibility / 1000} km
              </h3>
              <img
                className={styles["wrapper-img"]}
                src="/images/visibility.png"
                alt="visibility"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
