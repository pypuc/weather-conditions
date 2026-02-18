import styles from "./Sign-up.module.css";

export const SignUp = ({ closeModal }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles["modal-containerbig"]}>
          <div className={styles["modal-svgcont"]}>
            <img
              className={styles["modal-exit"]}
              onClick={closeModal}
              src="/images/cross.svg"
              alt="exit"
            />
          </div>
          <h2 className={styles["modal-maintitle"]}>Sign up</h2>
          <ul className={styles["modal-list"]}>
            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>Username</h3>
              <input
                className={styles["modal-input"]}
                placeholder="Username"
                type="text"
              />
            </li>
            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>E-Mail</h3>
              <input
                className={styles["modal-input"]}
                placeholder="E-Mail"
                type="text"
              />
            </li>
            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>Password</h3>
              <input
                className={styles["modal-input"]}
                placeholder="Password"
                type="text"
              />
            </li>
          </ul>
          <button className={styles["modal-button"]}>Sign up</button>
          <p className={styles["modal-acount-text"]}>
            Already have an account?{" "}
            <a className={styles["modal-link-login"]} href="">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
