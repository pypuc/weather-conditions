import { useState } from "react";
import styles from "./Login.module.css";

export const Login = ({ closeModal, openSignUp, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    setUser(foundUser);
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
              src="./images/cross.svg"
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              {error && <p className={styles["modal-error"]}>{error}</p>}
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
