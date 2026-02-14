import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles["hero-container"]}>
          <h1 className={styles["hero-title"]}>Weather dashboard</h1>
          <ul className={styles["hero-list"]}>
            <li className={styles["hero-iteam"]}>
              <p className={styles["hero-text"]}>
                Create your personal list of favorite cities and always be aware
                of the weather.
              </p>
            </li>
            <li className={styles["hero-iteam"]}>
              <p className={styles["hero-minitext"]}>
                October 2023 Friday, 13th
              </p>
            </li>
          </ul>
          <div className={styles["hero-search-container"]}>
            <input
              placeholder="Search location..."
              type="text"
              className={styles["hero-input"]}
            />
            <div className={styles.minik}>
              <img src="/images/search.svg" alt="search" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}