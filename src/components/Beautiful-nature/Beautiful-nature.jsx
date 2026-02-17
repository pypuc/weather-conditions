import styles from "./Beautiful-nature.module.css";

export const BeautifulNature = () => {
  return (
    <section className={styles.nature}>
      <div className="container">
        <h2 className={styles["nature-title"]}>Beautiful nature</h2>
        <div className={styles["nature-container"]}>
          <img className={styles["nature-img"]} src="/images/sea.png" alt="" />
          <img className={styles["nature-img"]} src="/images/lake.png" alt="" />
          <img
            className={styles["nature-img"]}
            src="/images/forest.png"
            alt=""
          />
          <img
            className={styles["nature-img"]}
            src="/images/hills.png"
            alt=""
          />
          <img
            className={styles["nature-img"]}
            src="/images/evening-lake.png"
            alt=""
          />
          <img className={styles["nature-img"]} src="/images/sea.png" alt="" />
          <img className={styles["nature-img"]} src="/images/lake.png" alt="" />
          <img
            className={styles["nature-img"]}
            src="/images/forest.png"
            alt=""
          />
          <img
            className={styles["nature-img"]}
            src="/images/hills.png"
            alt=""
          />
          <img
            className={styles["nature-img"]}
            src="/images/evening-lake.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
