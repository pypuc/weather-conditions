import styles from "./Eight-day-forecast.module.css";


export const EightDayForecast = () => {
  return (
    <section className={styles["eight-day"]}>
      <div className="container">
        <div className={styles["eight-day-bigcontainer"]}>
          <h2 className={styles["eight-day-title"]}>8-day forecast</h2>
          <ul className={styles["eight-day-list"]}>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Fri, Oct 13</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/rain.svg" alt="rain" />
                <p className={styles["eight-day-celciatext"]}>23/14℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>light rain</p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Sat, Oct 14</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/rain.svg" alt="rain" />
                <p className={styles["eight-day-celciatext"]}>22/10℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>light rain</p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Sun, Oct 15</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/rain.svg" alt="rain" />
                <p className={styles["eight-day-celciatext"]}>13/6℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>light rain</p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Mon, Oct 16</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/clouds-sun.svg" alt="few clouds" />
                <p className={styles["eight-day-celciatext"]}>12/4℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>few clouds</p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Tue, Oct 17</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/black-clouds.svg" alt="overcast clouds" />
                <p className={styles["eight-day-celciatext"]}>12/4℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>
                  overcast clouds
                </p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Wed, Oct 18</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/sun.svg" alt="clear sky" />
                <p className={styles["eight-day-celciatext"]}>13/3℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>clear sky</p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Thu, Oct 19</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/black-clouds.svg" alt="overcast clouds" />
                <p className={styles["eight-day-celciatext"]}>12/5℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>
                  overcast clouds
                </p>
              </div>
            </li>
            <li className={styles["eight-day-iteam"]}>
              <div className={styles["eight-day-miniminic"]}>
                <h4 className={styles["eight-day-celciatext"]}>Fri, Oct 20</h4>
              </div>
              <div className={styles["eight-day-minicon"]}>
                <img src="/images/clouds.svg" alt="scattered clouds" />
                <p className={styles["eight-day-celciatext"]}>9/3℃</p>
              </div>
              <div className={styles["eight-day-miniminic"]}>
                <p className={styles["eight-day-celciatext"]}>
                  scattered clouds
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
