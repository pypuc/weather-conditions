import styles from "./Sign-up.module.css";

export const SignUp = () => {
  return (
    <section className={styles.modal}>
      <h1 className={styles["footer-maintitle"]}>Sign up</h1>
      <ul className={styles["footer-list"]}>
        <li className={styles["footer-iteam"]}>
          <h3 className={styles["footer-title"]}>Username</h3>
          <input placeholder="Username" type="text" />
        </li>
        <li className={styles["footer-iteam"]}>
          <h3 className={styles["footer-title"]}>E-Mail</h3>
          <input placeholder="E-Mail" type="text" />
        </li>
        <li className={styles["footer-iteam"]}>
          <h3 className={styles["footer-title"]}>Password</h3>
          <input placeholder="Password" type="text" />
        </li>
      </ul>
      <button>Sign up</button>
      <p>
        Already have an account? <a href="">Log In</a>
      </p>
    </section>
  );
};
