import styles from "./Weather.module.css";


export const Weather = () => {
  return (
    <section className={styles.weather}>
      <div className="container">
        <ul className={styles["weather-list"]}>
          <li className={styles["weather-iteam"]}>
            <div className={styles["weather-minitextcont"]}>
              <p className={styles["weather-textname"]}>Prague</p>
              <p className={styles["weather-textname"]}>Czech Republic</p>
            </div>
            <h3 className={styles["weather-title-time"]}>14:00</h3>
            <div className={styles["weather-divforecast"]}>
              <button className={styles["weather-forecast"]} type="button">
                Hourly forecast
              </button>
              <button className={styles["weather-forecast"]} type="button">
                Weekly forecast
              </button>
            </div>
            <ul className={styles["weather-mini-list"]}>
              <li>
                <p className={styles["weather-data"]}>13.10.2023</p>
              </li>
              <li>
                <p className={styles["weather-data"]}>Friday</p>
              </li>
            </ul>
            <img src="/images/weather-sun.svg" alt="sun" />
            <h3 className={styles["weather-temp"]}>22°C</h3>
            <ul className={styles["weather-list-svg"]}>
              <li>
                <img src="/images/refresh.svg" alt="refresh" />
              </li>
              <li>
                <img src="/images/heart.svg" alt="heart" />
              </li>
              <li>
                <button className={styles["weather-but"]} type="button">
                  See more
                </button>
              </li>
              <li>
                <img src="/images/delete.svg" alt="delete" />
              </li>
            </ul>
          </li>
          <li className={styles["weather-iteam"]}>
            <div className={styles["weather-minitextcont"]}>
              <p className={styles["weather-textname"]}>Prague</p>
              <p className={styles["weather-textname"]}>Czech Republic</p>
            </div>
            <h3 className={styles["weather-title-time"]}>14:00</h3>
            <div className={styles["weather-divforecast"]}>
              <button className={styles["weather-forecast"]} type="button">
                Hourly forecast
              </button>
              <button className={styles["weather-forecast"]} type="button">
                Weekly forecast
              </button>
            </div>
            <ul className={styles["weather-mini-list"]}>
              <li>
                <p className={styles["weather-data"]}>13.10.2023</p>
              </li>
              <li>
                <p className={styles["weather-data"]}>Friday</p>
              </li>
            </ul>
            <img
              className={styles["weather-image"]}
              src="/images/weather-sun.svg"
              alt="sun"
            />
            <h3 className={styles["weather-temp"]}>22°C</h3>
            <ul className={styles["weather-list-svg"]}>
              <li>
                <img src="/images/refresh.svg" alt="refresh" />
              </li>
              <li>
                <img src="/images/heart.svg" alt="heart" />
              </li>
              <li>
                <button className={styles["weather-but"]} type="button">
                  See more
                </button>
              </li>
              <li>
                <img src="/images/delete.svg" alt="delete" />
              </li>
            </ul>
          </li>
          <li className={styles["weather-iteam"]}>
            <div className={styles["weather-minitextcont"]}>
              <p className={styles["weather-textname"]}>Prague</p>
              <p className={styles["weather-textname"]}>Czech Republic</p>
            </div>
            <h3 className={styles["weather-title-time"]}>14:00</h3>
            <div className={styles["weather-divforecast"]}>
              <button className={styles["weather-forecast"]} type="button">
                Hourly forecast
              </button>
              <button className={styles["weather-forecast"]} type="button">
                Weekly forecast
              </button>
            </div>
            <ul className={styles["weather-mini-list"]}>
              <li>
                <p className={styles["weather-data"]}>13.10.2023</p>
              </li>
              <li>
                <p className={styles["weather-data"]}>Friday</p>
              </li>
            </ul>
            <img src="/images/weather-sun.svg" alt="sun" />
            <h3 className={styles["weather-temp"]}>22°C</h3>
            <ul className={styles["weather-list-svg"]}>
              <li>
                <img src="/images/refresh.svg" alt="refresh" />
              </li>
              <li>
                <img src="/images/heart.svg" alt="heart" />
              </li>
              <li>
                <button className={styles["weather-but"]} type="button">
                  See more
                </button>
              </li>
              <li>
                <img src="/images/delete.svg" alt="delete" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
