import styles from "./Eight-day-forecast.module.css";

export const EightDayForecast = ({ data = [] }) => {
  return (
    <section className={styles["eight-day"]}>
      <div className="container">
        <div className={styles["eight-day-bigcontainer"]}>
          <h2 className={styles["eight-day-title"]}>8-day forecast</h2>
          <ul className={styles["eight-day-list"]}>
            {data.map((day, index) => (
              <li key={index} className={styles["eight-day-iteam"]}>
                <div className={styles["eight-day-miniminic"]}>
                  <h4 className={styles["eight-day-celciatext"]}>{day.date}</h4>
                </div>

                <div className={styles["eight-day-minicon"]}>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                    alt={day.description}
                  />
                  <p className={styles["eight-day-celciatext"]}>
                    {day.max}/{day.min}℃
                  </p>
                </div>

                <div className={styles["eight-day-miniminic"]}>
                  <p className={styles["eight-day-celciatext"]}>
                    {day.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
