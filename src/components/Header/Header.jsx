import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-container"]}>
          <img src="/images/24-forecast.svg" alt="24-forecast" />
          <ul className={styles["header-list"]}>
            <li>Who we are</li>
            <li>Contacts</li>
            <li>Menu</li>
          </ul>
          <button type="button" className={styles["header-singup"]}>
            Sign Up
          </button>
          <img src="/images/user.svg" alt="24-forecast" />
        </div>
      </div>
    </header>
  );
};
