import styles from "./Login.module.css";

export const Login = ({ closeModal, openSignUp }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <form className={styles["modal-containerbig"]}>
          <div className={styles["modal-svgcont"]}>
            <img
              className={styles["modal-exit"]}
              onClick={closeModal}
              src="/images/cross.svg"
              alt="exit"
            />
          </div>

          <h2 className={styles["modal-maintitle"]}>Log In</h2>

          <ul className={styles["modal-list"]}>
            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>E-Mail</h3>
              <input
                className={styles["modal-input"]}
                type="email"
                placeholder="E-Mail"
                required
              />
            </li>

            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>Password</h3>
              <input
                className={styles["modal-input"]}
                placeholder="Password"
                type="password"
                required
                minLength={6}
              />
            </li>
          </ul>

          <button className={styles["modal-button"]} type="submit">
            Log In
          </button>

          <p className={styles["modal-acount-text"]}>
            Don’t have an account?
            <button
              type="button"
              className={styles["modal-link-login"]}
              onClick={openSignUp}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
