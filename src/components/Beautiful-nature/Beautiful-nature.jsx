import styles from "./Beautiful-nature.module.css";

export const BeautifulNature = () => {
  return (
    <section className={styles.nature}>
      <div className="container">
        <h2 className={styles["nature-title"]}>Beautiful nature</h2>
        <div className={styles["nature-container"]}>
          <img
            className={styles["nature-img"]}
            src="/images/beautiful-nature.png"
            alt="Beautiful nature"
          />
        </div>
      </div>
    </section>
  );
};
