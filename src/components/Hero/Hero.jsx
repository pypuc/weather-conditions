import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Weather dashboard</h1>
      <ul>
        <li>
          <p>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
        </li>
        <li>
          <p>October 2023Friday, 13th</p>
        </li>
      </ul>
      <input type="text" />
    </section>
  );
}