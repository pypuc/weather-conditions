import styles from "./Weather.module.css";


export const Weather = () => {
  return (
    <section className={styles.weather}>
      <ul>
        <li>
          <p>Prague</p>
          <p>Czech Republic</p>
          <h3>14:00</h3>
          <button type="button">Hourly forecast</button>
          <button type="button">Weekly forecast</button>
          <ul>
            <li>
              <p>13.10.2023</p>
            </li>
            <li>
              <p>Friday</p>
            </li>
          </ul>
          <img src="/images/sun.png" alt="sun" />
          <h3>22°C</h3>
          <button type="button">See more</button>
        </li>
        <li>
          <p>Prague</p>
          <p>Czech Republic</p>
          <h3>14:00</h3>
          <button type="button">Hourly forecast</button>
          <button type="button">Weekly forecast</button>
          <ul>
            <li>
              <p>13.10.2023</p>
            </li>
            <li>
              <p>Friday</p>
            </li>
          </ul>
          <img src="/images/sun.png" alt="sun" />

          <h3>22°C</h3>
          <button type="button">See more</button>
        </li>
        <li>
          <p>Prague</p>
          <p>Czech Republic</p>
          <h3>14:00</h3>
          <button type="button">Hourly forecast</button>
          <button type="button">Weekly forecast</button>
          <ul>
            <li>
              <p>13.10.2023</p>
            </li>
            <li>
              <p>Friday</p>
            </li>
          </ul>
          <img src="/images/sun.png" alt="sun" />
          <h3>22°C</h3>
          <button type="button">See more</button>
        </li>
      </ul>
    </section>
  );
};
