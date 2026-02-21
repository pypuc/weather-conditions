import styles from "./Weather.module.css";

export const Weather = ({ cities }) => {
  if (!cities || cities.length === 0) {
    return (
      <section className={styles.weather}>
        <div className="container">
          <ul className={styles["weather-list"]}>
            <li className={styles["weather-iteam"]}>
              <p style={{ padding: "20px" }}>
                Search city to see weather history
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.weather}>
      <div className="container">
        <ul className={styles["weather-list"]}>
          {cities.map((city) => {
            const utcNow = Date.now() + new Date().getTimezoneOffset() * 60000;

            const localTime = new Date(utcNow + city.timezone * 1000);

            const date = localTime.toLocaleDateString();
            const day = localTime.toLocaleDateString("en-US", {
              weekday: "long",
            });

            const time = localTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <li key={city.id} className={styles["weather-iteam"]}>
                <div className={styles["weather-minitextcont"]}>
                  <p className={styles["weather-textname"]}>{city.name}</p>
                  <p className={styles["weather-textname"]}>
                    {city.sys.country}
                  </p>
                </div>

                <h3 className={styles["weather-title-time"]}>{time}</h3>

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
                    <p className={styles["weather-data"]}>{date}</p>
                  </li>
                  <li>
                    <p className={styles["weather-data"]}>{day}</p>
                  </li>
                </ul>

                <img
                  className={styles["weather-image"]}
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                  alt="weather"
                />

                <h3 className={styles["weather-temp"]}>
                  {Math.round(city.main.temp)}°C
                </h3>

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
            );
          })}
        </ul>
      </div>
    </section>
  );
};
