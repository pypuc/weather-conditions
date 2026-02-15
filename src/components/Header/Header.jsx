import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-container"]}>
          <img src="/images/24-forecast.svg" alt="24-forecast" />
          <ul className={styles["header-list"]}>
            <li>
              <a href="" className={styles["header-share"]}>Who we are</a>
            </li>
            <li>
              <a href="" className={styles["header-share"]}>Contacts</a>
            </li>
            <li>
              <a href="" className={styles["header-share"]}>Menu</a>
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
