import { useState } from "react";
import styles from "./Sign-up.module.css";

export const SignUp = ({ closeModal, openLogin, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = existingUsers.find((user) => user.email === email);

    if (emailExists) {
      setError("This email is already registered");
      return;
    }

    const newUser = { username, email, password };
    const updatedUsers = existingUsers.concat(newUser);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser(newUser);
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

          <h2 className={styles["modal-maintitle"]}>Sign up</h2>

          <ul className={styles["modal-list"]}>
            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>Username</h3>
              <input
                placeholder="Username"
                className={styles["modal-input"]}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </li>

            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>E-Mail</h3>
              <input
                placeholder="E-Mail"
                className={styles["modal-input"]}
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              {error && (
                <p
                  className={styles["modal-error"]}
                >
                  {error}
                </p>
              )}
            </li>

            <li className={styles["modal-iteam"]}>
              <h3 className={styles["modal-title"]}>Password</h3>
              <input
                placeholder="Password"
                className={styles["modal-input"]}
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
            Already have an account?
            <button
              type="button"
              className={styles["modal-link-login"]}
              onClick={openLogin}
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
