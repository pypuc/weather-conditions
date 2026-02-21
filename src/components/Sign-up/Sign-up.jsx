import { useState } from "react";
import styles from "./Sign-up.module.css";

export const SignUp = ({ closeModal, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { username, email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    closeModal();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <form className={styles["modal-containerbig"]} onSubmit={handleSubmit}>
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
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </li>

            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>E-Mail</h3>
              <input
                className={styles["modal-input"]}
                placeholder="E-Mail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
          </ul>

          <button className={styles["modal-button"]} type="submit">
            Sign up
          </button>

          <p className={styles["modal-acount-text"]}>
            Already have an account?{" "}
            <a className={styles["modal-link-login"]} href="#">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
