import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-container"]}>
          <img src="/images/24-forecast.svg" alt="24-forecast" />
          <ul className={styles["header-list"]}>
            <li>
              <p className={styles["header-share"]}>Who we are</p>
            </li>
            <li>
              <p className={styles["header-share"]}>Contacts</p>
            </li>
            <li>
              <p className={styles["header-share"]}>Menu</p>
            </li>
          </ul>
          <div className={styles["header-mincont"]}>
            <button type="button" className={styles["header-singup"]}>
              Sign Up
            </button>
          </div>
          <img src="/images/user.svg" alt="24-forecast" />
        </div>
      </div>
    </header>
  );
};
