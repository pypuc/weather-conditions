import styles from "./Header.module.css";

export const Header = ({ openModal }) => {
  return (
    <header>
      <div className="container">
        <div className={styles["header-container"]}>
          <img src="/images/24-forecast.svg" alt="24-forecast" />

          <ul className={styles["header-list"]}>
            <li>
              <a href="" className={styles["header-share"]}>
                Who we are
              </a>
            </li>
            <li>
              <a href="" className={styles["header-share"]}>
                Contacts
              </a>
            </li>
            <li>
              <a href="" className={styles["header-share"]}>
                Menu
              </a>
            </li>
          </ul>

          <div className={styles["header-mincont"]}>
            <button
              type="button"
              className={styles["header-singup"]}
              onClick={openModal}
            >
              Sign Up
            </button>
          </div>

          <img
            className={styles["header-us"]}
            src="/images/user.svg"
            alt="user"
          />
        </div>
      </div>
    </header>
  );
};
